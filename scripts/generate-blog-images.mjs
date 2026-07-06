import fs from "fs";
import path from "path";
import https from "https";

const API_KEY = process.env.IDEOGRAM_API_KEY;
if (!API_KEY) {
  console.error("❌ Set IDEOGRAM_API_KEY environment variable");
  process.exit(1);
}

const BLOG_DIR = "src/content/blog";
const OUTPUT_DIR = "public/images/blog";

const posts = [
  {
    slug: "designing-for-how-families-actually-live",
    prompt:
      "Warm, inviting modern Indian home interior with an open kitchen connected to a living room, soft golden evening light streaming through windows, family gathered around a breakfast counter, earthy tones with natural materials, photorealistic architectural photography style, 4K",
  },
  {
    slug: "reading-a-mumbai-micro-market-before-you-build",
    prompt:
      "Aerial view of a dense Mumbai neighbourhood with old and new buildings side by side, narrow streets, late afternoon golden hour light, rooftop water tanks and vegetation, vibrant urban texture, photorealistic architectural documentary style, 4K",
  },
  {
    slug: "the-second-generation-advantage-in-a-family-business",
    prompt:
      "A confident young Indian businessman in a hard hat standing on a construction site overlooking Mumbai skyline, warm sunset light, modern high-rise buildings under construction in background, inspirational leadership portrait style, photorealistic, 4K",
  },
  {
    slug: "longevity-over-trend-materials-that-age-well",
    prompt:
      "Close-up textured shot of natural stone and weathered brick wall with Kota stone flooring, warm natural light highlighting material grain and patina, aged wood detail, earthy colour palette of browns and greys, architectural material study photography, 4K",
  },
  {
    slug: "transparency-as-a-redevelopment-strategy",
    prompt:
      "Architectural blueprint and building plan documents spread on a wooden table, hard hat and safety vest beside them, bright office window with construction site visible beyond, clean professional corporate photography style, warm ambient light, 4K",
  },
  {
    slug: "why-redevelopment-is-mumbais-most-honest-form-of-growth",
    prompt:
      "Before-and-after contrast of a Mumbai residential building: left side old crumbling building, right side modern new tower on same site, vibrant city context, blue sky with clouds, hopeful transformation narrative, photorealistic architectural photography, 4K",
  },
];

async function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Download failed: ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
      file.on("error", reject);
    }).on("error", reject);
  });
}

async function generateImage(prompt, retries = 2) {
  const body = JSON.stringify({
    text_prompt: prompt,
    resolution: "1792x1024",
  });

  const response = await fetch("https://api.ideogram.ai/v1/ideogram-v4/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Api-Key": API_KEY,
    },
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Ideogram API error ${response.status}: ${text}`);
  }

  const data = await response.json();
  const url = data.data?.[0]?.url;
  if (!url) {
    throw new Error(`No image URL in response: ${JSON.stringify(data)}`);
  }
  return url;
}

async function updatePostFrontmatter(slug, imagePath) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  let content = fs.readFileSync(filePath, "utf-8");

  const ogLine = `ogImage: "${imagePath}"`;
  const lines = content.split("\n");
  const closeIndex = lines.indexOf("---", 1);

  if (closeIndex === -1) {
    console.error(`  ⚠ Could not find frontmatter end in ${filePath}`);
    return;
  }

  const frontmatter = lines.slice(1, closeIndex);
  const hasOg = frontmatter.some((l) => l.startsWith("ogImage:"));

  if (hasOg) {
    content = content.replace(/^ogImage:.*$/m, ogLine);
  } else {
    const dateIndex = frontmatter.findIndex((l) => l.startsWith("date:"));
    const insertAt = dateIndex !== -1 ? dateIndex + 1 : frontmatter.length;
    lines.splice(1 + insertAt, 0, ogLine);
    content = lines.join("\n");
  }

  fs.writeFileSync(filePath, content);
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let success = 0;
  let failed = 0;

  for (const post of posts) {
    const slug = post.slug;
    const outputPath = path.join(OUTPUT_DIR, `${slug}.jpg`);
    const relativePath = `/images/blog/${slug}.jpg`;

    if (fs.existsSync(outputPath)) {
      console.log(`⏭  ${slug}: image exists, updating frontmatter...`);
      await updatePostFrontmatter(slug, relativePath);
      success++;
      continue;
    }

    console.log(`🎨 ${slug}: generating...`);
    try {
      const imageUrl = await generateImage(post.prompt);
      console.log(`  ⬇ Downloaded to ${imageUrl}`);
      await downloadImage(imageUrl, outputPath);
      console.log(`  💾 Saved to ${outputPath}`);
      await updatePostFrontmatter(slug, relativePath);
      console.log(`  ✅ Updated frontmatter`);
      success++;
    } catch (err) {
      console.error(`  ❌ ${slug}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone. ${success} succeeded, ${failed} failed.`);
}

main();

import { readdir } from "node:fs/promises";
import { join, parse, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const imgDir = join(root, "public", "images");

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile()) yield full;
  }
}

async function optimizeImages() {
  const extRe = /\.(jpe?g|png)$/i;
  let count = 0;

  for await (const file of walk(imgDir)) {
    if (!extRe.test(file)) continue;

    const parsed = parse(file);
    const webpPath = join(parsed.dir, `${parsed.name}.webp`);

    const img = sharp(file);
    const meta = await img.metadata();

    if (meta.format === "png" && meta.hasAlpha) {
      await img
        .webp({ lossless: true, quality: 85 })
        .toFile(webpPath);
    } else {
      await img
        .webp({ quality: 82 })
        .toFile(webpPath);
    }

    count++;
    const rel = relative(root, file);
    const relOut = relative(root, webpPath);
    console.log(`  webp  ${rel}  →  ${relOut}`);
  }

  if (count === 0) {
    console.log("  No images to convert.");
  } else {
    console.log(`\n  Converted ${count} image${count > 1 ? "s" : ""} to WebP.`);
  }
}

optimizeImages().catch((err) => {
  console.error("optimize-images failed:", err);
  process.exit(1);
});

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://sagarbarot.com",
  integrations: [sitemap(), mdx()],

  build: {
    format: "directory",
  },

  server: {
    host: true,
  },

  adapter: cloudflare(),
});
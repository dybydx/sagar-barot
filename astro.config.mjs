import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sagarbarot.com",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
  server: {
    host: true,
  },
});

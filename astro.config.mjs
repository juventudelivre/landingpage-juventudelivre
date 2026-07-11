import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://juventudelivre.com.br',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
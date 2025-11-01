import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://cosmic-teddy-catastrophe.pages.dev',
  build: {
    format: 'directory'
  }
});

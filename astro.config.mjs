import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://arktika-coldstorage.example.com',
  integrations: [tailwind()],
});
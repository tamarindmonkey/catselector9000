import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://tamarindmonkey.github.io',
  base: '/catselector9000',
  integrations: [
    starlight({
      title: 'Cat Selector 9000',
    }),
  ],
});

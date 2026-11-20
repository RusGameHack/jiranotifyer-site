// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://rusgamehack.github.io',
  base: '/jiranotifyer-site',
  output: 'static',
  trailingSlash: 'always',
});

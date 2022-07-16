import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteSingleFile } from 'vite-plugin-singlefile';

import tailwind from 'tailwindcss';
import tailwindConfig from './tailwind.config.cjs';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), viteSingleFile()],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
  build: {
    minify: 'terser',
    target: 'es2021',
    polyfillModulePreload: false,
  },
});

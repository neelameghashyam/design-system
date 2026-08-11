import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
 resolve: {
  alias: {
    '@YOUR_GITHUB_ORG/ui-kit/styles': resolve(__dirname, '../ui-kit/src/styles/main.scss'),
    '@YOUR_GITHUB_ORG/ui-kit': resolve(__dirname, '../ui-kit/src/index.ts'),
  },
},
  root: __dirname,
});

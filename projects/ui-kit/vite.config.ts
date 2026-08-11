import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: resolve(__dirname, '../../tsconfig.json'),
      outDir: resolve(__dirname, 'dist'),
      cleanVueFileName: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: { vue: 'Vue', 'vue-router': 'VueRouter' },
        // Vite emits the library's single CSS bundle as `index.css` by default —
        // package.json's "./styles" export points there. Rename this fn's output
        // if you want a different file name (keep package.json in sync).
      },
    },
    cssCodeSplit: false,
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
});

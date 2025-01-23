import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import ts from 'typescript';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      outDir: 'dist',
      rollupTypes: true,
      compilerOptions: {
        moduleResolution: ts.ModuleResolutionKind.NodeNext,
      },
      tsconfigPath: './tsconfig.app.json',
      copyDtsFiles: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: {
        'gst-vue-ui': resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es', 'umd'],
      name: 'GstVueUI',
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue', 'primevue'],
      output: {
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue',
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'gst-vue-ui.css';
          return assetInfo.name;
        },
      },
    },
    cssCodeSplit: false,
  },
});

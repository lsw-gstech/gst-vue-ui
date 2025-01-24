import { fileURLToPath, URL } from 'node:url';
import { defineConfig, ConfigEnv, LibraryFormats } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import ts from 'typescript';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// 메인 라이브러리 빌드 설정
const mainBuild = {
  lib: {
    entry: resolve(__dirname, 'src/index.ts'),
    formats: ['es', 'umd'] as LibraryFormats[],
    name: 'GstVueUI',
    fileName: (format) => `gst-vue-ui.${format === 'es' ? 'mjs' : 'js'}`,
  },
  rollupOptions: {
    external: ['vue', 'primevue'],
    output: {
      globals: {
        vue: 'Vue',
        primevue: 'PrimeVue',
      },
      exports: 'named' as const,
    },
  },
  cssCodeSplit: false,
  css: {
    extract: false,
  },
};

// 스타일 전용 빌드 설정
const styleBuild = {
  rollupOptions: {
    input: resolve(__dirname, 'src/styles/variables.scss'),
    output: {
      assetFileNames: 'variables.css',
    },
  },
  cssCodeSplit: false,
  emptyOutDir: false,
};

export default defineConfig(({ mode }) => {
  const buildConfig = mode === 'style' ? styleBuild : mainBuild;

  return {
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
      viteStaticCopy({
        targets: [
          {
            src: 'src/styles/variables.scss',
            dest: '.',
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: buildConfig,
  };
});

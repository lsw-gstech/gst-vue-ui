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
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
      assetFileNames: (assetInfo) => {
        if (assetInfo.name === 'style.css') return 'gst-vue-ui.css';
        return assetInfo.name;
      },
    },
  },
  cssCodeSplit: false,
};

// 스타일 전용 빌드 설정
const styleBuild = {
  lib: {
    entry: resolve(__dirname, 'src/styles/variables.scss'),
    formats: ['es'] as LibraryFormats[],
    fileName: () => 'variables',
  },
  rollupOptions: {
    output: {
      assetFileNames: 'variables.css',
    },
  },
  cssCodeSplit: false,
  emptyOutDir: false,
};

export default defineConfig(({ command, mode }) => {
  const config = mode === 'style' ? styleBuild : mainBuild;

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
        beforeWriteFile: (filePath, content) => ({
          filePath: filePath.replace('/dist/src/', '/dist/'),
          content,
        }),
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
    build: {
      ...config,
      minify: true,
      sourcemap: true,
    },
  };
});

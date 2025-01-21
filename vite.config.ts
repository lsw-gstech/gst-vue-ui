import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GstVueUi',
      fileName: 'gst-vue-ui',
    },
    rollupOptions: {
      external: ['vue', 'primevue'],
      output: {
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'gst-vue-ui.css'
          return assetInfo.name || 'unknown'
        },
      },
    },
  },
})

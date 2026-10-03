import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 43127,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 43127,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        desbloqueio: resolve(__dirname, 'desbloqueio-bancario.html'),
      },
    },
  },
})

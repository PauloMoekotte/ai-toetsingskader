import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-toetsingskader/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          pdf: ['@react-pdf/renderer'],
        },
      },
    },
  },
})
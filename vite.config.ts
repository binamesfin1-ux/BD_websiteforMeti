import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In development, serve from root '/'.
// In production (GitHub Pages), serve from repository path '/BD_websiteforMeti/'.
const base = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/BD_websiteforMeti/' : '/')

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
})

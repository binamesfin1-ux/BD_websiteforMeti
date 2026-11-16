import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages repository: BD_websiteforMeti
const base = process.env.BASE_PATH ?? '/BD_websiteforMeti/'

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
})

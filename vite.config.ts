import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repository-name>/.
// By using './', all asset paths are relative and work seamlessly on both
// custom domains (root '/') and GitHub Pages project subpaths ('/<repo>/').
const base = process.env.BASE_PATH ?? './'

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
})

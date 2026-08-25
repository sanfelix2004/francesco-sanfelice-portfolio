import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site base path
export default defineConfig({
  base: '/francesco-sanfelice-portfolio/',
  plugins: [react(), tailwindcss()],
})

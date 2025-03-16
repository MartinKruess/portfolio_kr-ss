import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Bessere Minimierung
    minify: "terser",
    rollupOptions: {
      treeshake: true,
    }
  }
})

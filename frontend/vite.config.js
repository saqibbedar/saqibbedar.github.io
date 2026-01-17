import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from "@tailwindcss/vite"; // { added }

export default defineConfig({
  plugins: [react(), tailwindcss()], // { modified: add tailwindcss() }
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    },
    hmr: {
      overlay: true
    },
    allowedHosts: [
      '233d935c27df.ngrok-free.app'
    ]
  }
})
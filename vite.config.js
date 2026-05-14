import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        index2: resolve(__dirname, 'index2.html'),
        index3: resolve(__dirname, 'index3.html'),
      },
    },
  },
})

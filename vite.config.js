import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin(['VITE_API_URL_BASE',]),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup'
  }
})

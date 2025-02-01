import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/apple-clone",
  plugins: [react(), sentryVitePlugin({
    org: "dexcode-1e",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "dexcode-1e",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})
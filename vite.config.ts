import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import pkg from "./package.json"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: Object.keys(pkg.dependencies),
  },
  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          "react-router": ["react-router"],
        },
      },
    },
  },
})

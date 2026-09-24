
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { existsSync, statSync } from "node:fs";

const resumePath = path.resolve(__dirname, 'public/resume.pdf');

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "https://benjamin-chan.com/" : "/",
  define: {
    __HAS_RESUME__: JSON.stringify(existsSync(resumePath) && statSync(resumePath).size > 0),
  },
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "093131df-0cb4-4c21-9d4d-02a48f92fe41.lovableproject.com",
      "localhost"
    ]
  },
  plugins: [
    react(),
    // Only include development-specific plugins
    ...(mode === 'development' ? [/* componentTagger() */] : [])
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

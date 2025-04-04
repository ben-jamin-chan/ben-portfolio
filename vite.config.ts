
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "https://benjamin-chan.com/" : "/",
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

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/ben-portfolio" : "/",
  server: {
    host: "::",
    port: 8080,
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
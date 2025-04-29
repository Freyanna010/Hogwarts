import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Hogwarts/",

  resolve: {
    alias: {
      "@components": "/src/components",
      "@ui": "/src/components/ui",
      "@features": "/src/features",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@styles": "/src/styles",
      "@store": "/src/store",
      "@types": "/src/types",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@shared": "/src/shared",
    },
  },
});

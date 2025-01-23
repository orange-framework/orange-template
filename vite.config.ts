import orange from "@orange-js/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [orange()],
  build: {
    minify: true,
  }
});

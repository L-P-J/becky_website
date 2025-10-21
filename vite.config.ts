import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/becky_website/",
  plugins: [react(), tailwindcss()],
  build: {
    modulePreload: {
      polyfill: false,
    },
  },
});

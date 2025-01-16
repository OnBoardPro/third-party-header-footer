import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  test: {
    environment: "jsdom"
  },
  define: {
    "process.env": {}
  },
  build: {
    target: ["firefox78", "chrome87", "safari14"],
    lib: {
      entry: "./index.tsx",
      name: "OBP",
      fileName: "index",
      formats: ["umd"]
    }
  }
});

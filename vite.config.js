import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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

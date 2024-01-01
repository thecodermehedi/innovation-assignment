import path from "path";
import {dirname} from "path";
import {fileURLToPath} from "url";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

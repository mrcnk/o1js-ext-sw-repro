import { manifest } from "./src/manifest";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import webExtension from "vite-plugin-web-extension";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webExtension({ manifest: () => manifest }),
    topLevelAwait(),
  ],
});

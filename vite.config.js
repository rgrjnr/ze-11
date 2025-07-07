import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: [
        "defaults",
        "not IE 11",
        "not dead",
        "> 0.5%",
        "last 2 versions",
        "Firefox ESR",
      ],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      renderLegacyChunks: true,
      polyfills: [
        // Only include polyfills for features that aren't widely supported
        "es.promise",
        "es.promise.finally",
        "esnext.global-this",
      ],
    }),
  ],
  build: {
    outDir: "_site/dist",
    rollupOptions: {
      input: {
        main: "src/ts/main.ts",
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash].[ext]",
      },
    },
    minify: "terser",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      renderLegacyChunks: true,
      polyfills: [
        "es.symbol",
        "es.promise",
        "es.promise.finally",
        "es/map",
        "es/set",
        "es.array.filter",
        "es.array.for-each",
        "es.array.flat-map",
        "es.object.define-properties",
        "es.object.define-property",
        "es.object.get-own-property-descriptor",
        "es.object.get-own-property-descriptors",
        "es.object.keys",
        "es.object.to-string",
        "web.dom-collections.for-each",
        "esnext.global-this",
        "esnext.string.match-all",
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

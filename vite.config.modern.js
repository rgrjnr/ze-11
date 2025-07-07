import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
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
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
    },
    sourcemap: false, // Disable sourcemaps in production for smaller bundle
    target: "es2020", // Target modern browsers only
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

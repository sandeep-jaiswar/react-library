import { defineConfig } from 'vite';
import { resolve, join } from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from "vite-tsconfig-paths";
import packageFile from './package.json';

export default defineConfig({
  // The mode Vite will be running in, can be 'development', 'production', or 'test'
  mode: 'production',

  // Whether to clear the console screen when rebuilding
  clearScreen: true,

  // Directory where Vite will cache its files
  cacheDir: '.vite',

  // Build options
  build: {
    // The target environment for the build, can be 'modules' or 'esnext'
    target: 'modules',

    // The directory where build files will be written
    outDir: 'dist',

    // The directory within outDir where assets will be placed
    assetsDir: './assets', // Removed 'dist' prefix

    // The maximum size of assets that will be inlined (in bytes)
    assetsInlineLimit: 4096,

    // Whether to split CSS into its own chunk
    cssCodeSplit: true,

    // Whether to generate source maps for the build
    sourcemap: true,

    // The minifier to use, can be 'terser', 'esbuild', or a custom minification function
    minify: 'terser',

    // Custom Rollup options for the build
    rollupOptions: {
      output: {
        // Customize file names for different output formats
        entryFileNames: '[name].[format].js',
        chunkFileNames: '[name].[format].js',
        assetFileNames: '[name].[ext]',
      },
    },

    // Whether to write to disk during the build
    write: true,

    // Whether to empty the output directory before building
    emptyOutDir: true,

    lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: "index",
        formats: ['es', 'umd'],
        fileName: format => `${format}/[name]`,
    }
  },

  // Server optionsds
  server: {

    // Whether to open a browser when starting the server
    open: false,

    // Whether to use HTTPS
    https: false,

    // Proxy configuration
    proxy: {},

    // Enable or disable Hot Module Replacement
    hmr: true,

    // Enable or disable Cross-Origin Resource Sharing
    cors: "*", // Changed from single quotes to double quotes

    // Specifies the directory to serve as the root
    // Default: process.cwd()
    root: './',

    // Configures the strict MIME type checking for files being served
    // Default: true
    strictPort: true,

    // Configures the server to treat imports as JavaScript files
    // Default: false
    fs: {
      strict: true,
    },

    // Enables or disables HTTP2 server push
    // Default: true
    http2: true,

    // Configures HTTP2 server push rules
    // Default: []
    push: [],
  },

  // Configures Vite's logger
  logger: {
    // Whether to log output to the console
    // Default: 'info'
    level: 'info',
    
    // Whether to suppress vite build warnings in the console
    // Default: false
    warnInDev: false,
  },

  // Specifies additional configuration options for Vite's CSS handling
  css: {
    // Configures the behavior of CSS modules
    // Default: {}
    modules: {},

    // Configures the behavior of PostCSS plugins
    // Default: []
    postcss: [],

    // Specifies additional CSS preprocessors to use
    // Default: {}
    preprocessorOptions: {},
  },

  // Specifies additional configuration options for Vite's JavaScript handling
  esbuild: {
    // Controls whether to enable JSX transform
    // Default: true
    jsxFactory: 'React.createElement',

    // Controls whether to enable JSX fragment syntax
    // Default: true
    jsxFragment: 'React.Fragment',

    // Specifies additional transforms to apply
    // Default: []
    jsxInject: 'import React from "react";\n',
  },

  // Specifies additional configuration options for Vite's TypeScript handling
  typescript: {
    // Specifies additional TypeScript compiler options
    // Default: {}
    compilerOptions: {},
  },

  // Specifies additional configuration options for Vite's asset handling
  assets: {
    // Specifies the maximum asset size (in bytes) for inlining
    // Default: 4096
    inlineLimit: 4096,

    // Specifies the behavior of asset URLs
    // Default: 'base'
    publicDir: 'public',
  },

  // Specifies additional configuration options for Vite's CSS preprocessor
  cssPreprocessOptions: {
    // Specifies the default CSS preprocessor
    // Default: 'sass'
    default: 'scss',

    // Specifies additional configuration options for the preprocessor
    // Default: {}
    scss: {
      // Example: additionalData: '$color: red;'
    },
  },

  // Specifies additional configuration options for Vite's build system
  buildSystem: {
    // Specifies additional configuration options for the build
    // Default: {}
    build: {},

    // Specifies additional configuration options for Rollup
    // Default: {}
    rollup: {},
  },

  // Specifies additional configuration options for Vite's dependency optimization
  optimizeDeps: {
    // Specifies additional configuration options for dependency optimization
    // Default: {}
    options: {},
  },

  // An array of Vite plugins to use
  plugins: [
    react(),
    libInjectCss(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      outputDir: 'dist/types',
    }),
    {
      name: 'package-json',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'package.json',
          source: JSON.stringify({
            ...packageFile
          }),
        });
      },
    },
  ],
});

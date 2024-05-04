import { resolve, join } from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { libInjectCss } from 'vite-plugin-lib-inject-css'

const viteESConfig = { build: { outDir: "./dist/es" } };
const viteUMDConfig = { build: { outDir: "./dist/umd", emptyOutDir: false } };

const configBasedOnFormat = {
  es: viteESConfig,
  umd: viteUMDConfig,
};

const externalDependencies = [
  "react",
  "react-dom",
  "lucide-react",
  "eact-aria",
  "react-aria-components",
  "react-jsx/runtime",
];

export const commonConfig = (packageName, format, packageFile) => {
  const {
    globals = {},
    others = {},
    build = {},
  } = configBasedOnFormat[format] || {};

  return {
    plugins: [react(), libInjectCss(), dts({ insertTypesEntry: true })],
    css: {
      modules: { scopeBehaviour: "local" },
    },
    build: {
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, packageName, "index.ts"),
        name: "index",
        formats: [format],
        fileName: "[name]",
      },
      rollupOptions: {
        output: {
          globals: { react: "react", "react-dom": "React-dom", ...globals },
          entryFileNames: (chunkInfo) => {
            console.log("chunkInfo", chunkInfo.name);
            if (chunkInfo.name.includes("node_modules")) {
              return `${chunkInfo.name.replace("node_modules", "external")}.js`;
            }
            if (
              format === "es" &&
              chunkInfo.name.startsWith(`${packageName}/`)
            ) {
              return `${chunkInfo.name.replace(`${packageName}`, "")}.js`;
            }
            return "[name].js";
          },
          ...others,
        },
        external: [
          ...new Set([
            ...externalDependencies,
            ...Object.keys(packageFile.peerDependencies || {}),
            ...Object.keys(packageFile.dependencies || {}),
          ]),
        ],
      },
      ...build,
    },
  };
};

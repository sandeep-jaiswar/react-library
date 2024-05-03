import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

const viteESConfig = {
  build: { outDir: './dist/es'}
};

const viteUMDConfig = {
  build: { outDir: './dist/umd', emptyOutDir: false}
};

const configBasedOnFormat = {
  es: viteESConfig,
  umd: viteUMDConfig,
}

export const commonConfig = (packageName, format, packageFile) => ({
  plugins: [
    react(),
    dts({ insertTypesEntry : true})
  ],
  css: {
    modules: {
      scopeBehaviour: 'local'
    }
  },
  build: {
    sourcemap: true,
    rollupOptions:{
      output: {
        globals: {
          react: 'react',
          'react-dom': 'React-dom',
          ...(configBasedOnFormat[format]?.globals || {})
        }
      },
      external:[
        ...Array.from(
          new Set([
            'react',
            'react-dom',
            'react-jsx/runtime'
          ])
        )
      ]
    }
  }
})
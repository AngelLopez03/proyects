import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'FormComponent',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'classnames'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          classnames: 'classNames'
        },
      },
    },

    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
});

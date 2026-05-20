import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fr: resolve(__dirname, 'fr/index.html'),
        fr2: resolve(__dirname, 'fr2/index.html'),
        fr3: resolve(__dirname, 'fr3/index.html'),
        fr4: resolve(__dirname, 'fr4/index.html'),
        fr5: resolve(__dirname, 'fr5/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});

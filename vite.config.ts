import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  base: './',
  plugins: [
    solidPlugin(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});

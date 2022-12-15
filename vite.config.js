/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [vue(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'sirena.svg'],
    manifest: {
      name: 'Lavrentieva Vetyk',
      short_name: 'Vetyk',
      description: 'Hello, this is my description! ',
      theme_color: '#fff',
      background_color: '#fff',
      icons: [
        {
          src: 'icons/icon(1).png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/main.scss";',
      },
    },
  },
  server: {
    port: 8080,
    host: true,
    fs: {
      allow: ['../'],
    },
  },
});

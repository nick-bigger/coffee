import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr/plugin';

// https://vite.dev/config/
export default defineConfig({
  base: "/coffee/",
  plugins: [
    tailwindcss(),
    ssr({ prerender: true }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})

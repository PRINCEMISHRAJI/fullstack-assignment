import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/cards': {
        target: 'https://fullstack-assignment-7599.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cards/, '/cards'),
      },
    },
  },
});

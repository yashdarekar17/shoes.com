import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // <-- ✅ FIXED: Add the React plugin here
  server: {
    proxy: {
      '/cart': 'http://localhost:8000',
    },
  },
});


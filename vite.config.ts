import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist', // ✅ Ensure this is set correctly
    sourcemap: true,
    target: 'esnext', // Optimize for modern browsers
    rollupOptions: {
      output: {
        manualChunks: undefined, // Reduce file splitting issues
      },
    },
  },
  define: {
    'process.env': {} // Prevent issues with process.env usage in client code
  }
});

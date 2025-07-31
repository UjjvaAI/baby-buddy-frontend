import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync, existsSync } from 'fs';

// ✅ Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
  // ✅ Copy _redirects after build
  closeBundle() {
    const from = path.resolve(__dirname, 'public/_redirects');
    const to = path.resolve(__dirname, 'dist/_redirects');
    if (existsSync(from)) {
      try {
        copyFileSync(from, to);
        console.log('✅ Copied _redirects to dist/');
      } catch (err) {
        console.error('❌ Failed to copy _redirects:', err);
      }
    } else {
      console.warn('⚠️ _redirects file not found in public/');
    }
  },
});

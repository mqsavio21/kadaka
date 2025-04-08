import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Production build options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router']
        }
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096, // 4kb
    chunkSizeWarningLimit: 1000,
    // Generate source maps for production
    sourcemap: true,
    // Optimize CSS
    cssCodeSplit: true,
    // Optimize images
    assetsDir: 'assets',
    // Cache busting
    target: 'esnext',
    // Modern build
    modern: true
  },
  // Optimize development server
  server: {
    port: 3000,
    open: true
  }
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import pkg from './package.json';

// 不使用 vite-plugin-electron,改用手动编译
export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],
  define: {
    // 从 package.json 注入版本号，前端统一使用 __APP_VERSION__
    __APP_VERSION__: JSON.stringify(pkg.version),
    // 注入版本标识: 'full' = 完整版(含本地模型服务器), 'lite' = 轻量版
    __APP_EDITION__: JSON.stringify(process.env.EDITION || 'full'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});

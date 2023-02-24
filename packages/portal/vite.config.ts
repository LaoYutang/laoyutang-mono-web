import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'
import { UtilsImport } from 'imports'

export default defineConfig({
  server: {
    base: '/',
    port: 8000, // 启动端口
    strictPort: true, // 端口被占用尝试下一个端口
    cors: true,
    hmr: {
      host: 'localhost',
      port: 8000,
    },
  },
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: '../../dist/portal',
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', UtilsImport()],
      dts: 'src/auto-imports.d.ts',
      eslintrc: { enabled: true },
      resolvers: [ElementPlusResolver()],
      dirs: ['./src/utils'],
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
  ],
})

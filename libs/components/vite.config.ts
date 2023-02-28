import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { ComponentsResolver } from 'imports'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  server: {
    base: '/',
    port: 8020, // 启动端口
    strictPort: true, // 端口被占用尝试下一个端口
    cors: true,
    hmr: {
      host: 'localhost',
      port: 8020,
    },
  },
  resolve: {
    alias: {
      // 设置别名
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'src/components/auto-imports.d.ts',
      eslintrc: { enabled: true },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: 'src/components/components.d.ts',
      resolvers: [ComponentsResolver(), ElementPlusResolver()],
    }),
  ],
})

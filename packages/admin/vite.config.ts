import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { UtilsImport, ComponentsResolver } from 'imports'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    base: '/',
    port: 8001, // 启动端口
    strictPort: true, // 端口被占用尝试下一个端口
    cors: true,
    hmr: {
      host: 'localhost',
      port: 8001,
    },
  },
  build: {
    outDir: '../../dist/admin',
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
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', UtilsImport()],
      dts: 'src/auto-imports.d.ts',
      eslintrc: { enabled: true },
      resolvers: [ElementPlusResolver()],
      dirs: ['./src/utils'],
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({ prefix: 'icon' }),
        ComponentsResolver(),
      ],
    }),
    Icons({ autoInstall: true, compiler: 'vue3' }),
  ],
})

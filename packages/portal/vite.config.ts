import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import * as path from 'path'
import { UtilsImport, ComponentsResolver } from 'imports'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

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
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
          // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
          // alias: { park: 'icon-park' } 集合的别名
          // enabledCollections: ['ep'], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
        }),
        ComponentsResolver,
      ],
    }),
    Icons({ autoInstall: true, compiler: 'vue3' }),
  ],
})

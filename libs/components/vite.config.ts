import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import dts from 'vite-plugin-dts'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    // dts({
    //   outputDir: ['./lib', './es'], // 声明文件输出目录
    //   include: ['src/**/*.ts', 'src/**/*.vue'], // 包含的源文件
    //   exclude: [], // 排除的源文件
    // }),
  ],
})

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: ['./src/main.ts'],
    },
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['./src/main.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          //配置打包根目录
          dir: './es',
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          //配置打包根目录
          dir: './lib',
        },
      ],
    },
  },
  plugins: [
    dts({
      outputDir: ['./lib', './es'], // 声明文件输出目录
      include: ['src/**/*.ts'], // 包含的源文件
      exclude: [], // 排除的源文件
    }),
  ],
})

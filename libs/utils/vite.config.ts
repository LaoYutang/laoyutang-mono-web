import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: ['./src/main.ts', './src/hooks.ts'],
      name: 'Utils',
      fileName: (format, entryName) => {
        return `${entryName}.${format === 'es' ? 'js' : format}`
      },
    },
  },
  plugins: [
    dts({
      outputDir: ['./dist', './dist'], // 声明文件输出目录
      include: ['src/**/*.ts'], // 包含的源文件
      exclude: [], // 排除的源文件
    }),
  ],
})

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const fs = require('fs-extra')
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueSetupExtend = require('vite-plugin-vue-setup-extend')
const dts = require('vite-plugin-dts')
const AutoImport = require('unplugin-auto-import/vite')
const Components = require('unplugin-vue-components/vite')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const entryDir = path.resolve(__dirname, '../src/components')
const outputDir = path.resolve(__dirname, '../build')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: false,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: false,
    }),
    dts(),
    vueSetupExtend(),
  ],
})

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue',
    },
    exports: 'named',
  },
}

// 全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, 'index.ts'),
          name: 'components',
          fileName: 'components',
          formats: ['es', 'umd'],
        },
        outDir: outputDir,
      },
    }),
  )
}

// 单组件按需构建
const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        emptyOutDir: false,
        lib: {
          entry: path.resolve(entryDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd'],
        },
        outDir: path.resolve(outputDir, name),
      },
    }),
  )
}

// 生成组件的 package.json 文件
const createPackageJson = (name) => {
  const fileStr = `{
  "name": "${name}",
  "version": "0.0.0",
  "main": "index.umd.js",
  "module": "index.mjs",
  "style": "style.css",
  "types": "index.d.ts"
}`

  fs.outputFile(
    path.resolve(outputDir, `${name}/package.json`),
    fileStr,
    'utf-8',
  )
}

// 获取所有的组件名(文件夹中包含index.ts的文件夹名称)
const getComponentNames = () => {
  return fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })
}

const buildLib = async () => {
  await buildAll()

  // 获取组件名称组成的数组
  const components = getComponentNames()

  // 循环一个一个组件构建
  for (const name of components) {
    // 构建单组件
    await buildSingle(name)

    // 生成组件的 package.json 文件
    createPackageJson(name)
  }
}

buildLib()

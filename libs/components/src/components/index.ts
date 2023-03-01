import type { App } from 'vue'
export * from './CmButton'
export * from './CmSvg'
export * from './CmTable'

const components: any[] = []
const modules = import.meta.glob('./*/index.ts')

const importComponents = async () => {
  for (const module of Object.values(modules)) {
    const imports = (await module()) as { [attr: string]: any }
    components.push(imports.default)
  }
}
importComponents()

export default {
  install(app: App) {
    components.forEach((component) => {
      app.use(component)
    })
  },
}

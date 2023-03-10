export * from './CmButton'
export * from './CmSvg'
export * from './CmTable'
export * from './CmInput'
export * from './CmSelect'
export * from './CmDialog'
export * from './CmFilter'
export * from './CmChart'
export * from './CmChartCard'
export * from './CmEmpty'
export * from './CmRadio'

import type { App } from 'vue'

const components: any[] = []
const modules = import.meta.glob('./*/index.ts', { eager: true }) as Record<
  string,
  { [attr: string]: any }
>

const importComponents = async () => {
  for (const module of Object.values(modules)) {
    components.push(module.default)
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

import CmButton from './index.vue'
import type { App } from 'Vue'

export { CmButton }

export default {
  install(app: App) {
    app.component(CmButton.name, CmButton)
  },
}

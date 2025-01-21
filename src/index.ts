import type { App } from 'vue'
import * as components from './components'

export default {
  install: (app: App) => {
    // 모든 컴포넌트 등록
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component)
    })
  },
}

export * from './components'

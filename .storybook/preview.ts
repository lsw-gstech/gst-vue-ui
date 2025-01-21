import type { Preview } from '@storybook/vue3'
import { getCurrentInstance, ref, watch } from 'vue'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story, context) => ({
      components: { story },
      setup() {
        const app = getCurrentInstance()?.appContext.app
        if (app && !app._context.config.globalProperties.$primevue) {
          app.use(PrimeVue)
        }

        // v-model 바인딩을 위한 처리
        const modelValue = ref(context.args.modelValue)

        watch(modelValue, (newValue) => {
          context.args.modelValue = newValue
        })

        watch(
          () => context.args.modelValue,
          (newValue) => {
            modelValue.value = newValue
          },
        )

        return {
          args: context.args,
          modelValue,
        }
      },
      template:
        '<story v-bind="args" :modelValue="modelValue" @update:modelValue="modelValue = $event" />',
    }),
  ],
}

export default preview

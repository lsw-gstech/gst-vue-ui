import type { App } from '@vue/runtime-core';
import * as components from './components';

// Vue 플러그인
export default {
  install: (app: App) => {
    // 모든 컴포넌트 등록
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  },
};

// 컴포넌트와 타입 내보내기
export * from './components';

export { default as GstButton } from './components/Button/Button.vue';
export { default as GstInput } from './components/Input/Input.vue';
// ... 다른 GST 컴포넌트들 export

export { default as plugin } from './plugin';

// PrimeVue 컴포넌트 타입 export
export type { ButtonProps } from 'primevue/button';
export type { InputTextProps } from 'primevue/inputtext';
// ... 다른 타입들 export

// PrimeVue 유틸리티
export { useToast } from 'primevue/usetoast';
export { useDialog } from 'primevue/usedialog';
export { useConfirm } from 'primevue/useconfirm';

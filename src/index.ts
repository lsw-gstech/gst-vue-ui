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

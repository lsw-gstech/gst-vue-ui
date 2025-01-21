# GST Vue UI

## 소개

GST Vue UI는 PrimeVue를 기반으로 한 Vue 3 UI 컴포넌트 라이브러리입니다. PrimeVue 컴포넌트를 효율적으로 랩핑하여 일관된 디자인 시스템과 향상된 사용자 경험을 제공합니다.

## 주요 기능

- 💚 Vue 3 Composition API 기반
- 🎯 PrimeVue 컴포넌트 랩핑 및 기능 확장
- 📘 TypeScript로 작성된 타입 안전한 컴포넌트
- 🎨 GST 디자인 시스템 적용
- 📱 반응형 디자인 지원
- ⚡️ Vite 기반의 빠른 개발 환경
- 📚 Storybook을 통한 컴포넌트 문서화
- 🧪 Vitest를 통한 테스트 자동화

## 기술 스택

- Vue 3
- TypeScript
- PrimeVue
- Vite
- SCSS
- Storybook
- Vitest

## 설치 방법

```bash
npm install @gst/vue-ui primevue
```

## 기본 설정

```typescript
// main.ts
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import GstVueUI from '@gst/vue-ui'

import 'primevue/resources/themes/lara-light-blue/theme.css'
import '@gst/vue-ui/dist/style.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(GstVueUI)
app.mount('#app')
```

## 컴포넌트 사용 예시

```vue
<template>
  <GstButton label="버튼" @onClick="handleClick" />
  <GstDataTable :data="items" :columns="columns" />
</template>
```

## 컴포넌트 구조

```
src/
  components/
    ComponentName/
      ComponentName.vue  # PrimeVue 컴포넌트 랩핑
      types.ts          # 타입 정의
      index.ts         # 컴포넌트 내보내기
      style.scss       # 스타일 커스터마이징
      __tests__/
        ComponentName.spec.ts
      __stories__/
        ComponentName.stories.ts
```

## 개발 가이드라인

### 컴포넌트 네이밍

- 모든 컴포넌트는 'Gst' 접두사 사용
- PascalCase 네이밍 규칙 준수
- 예: GstButton, GstDataTable, GstDialog

### PrimeVue 랩핑 규칙

- PrimeVue 컴포넌트의 기본 기능 유지
- GST 디자인 시스템에 맞는 스타일 적용
- 필요한 경우 추가 기능 확장

### 코드 스타일

- Props: camelCase
- 이벤트: 'on' 접두사 + PascalCase
- CSS 클래스: 'gst-' 접두사 + kebab-case

### 문서화

- 모든 컴포넌트는 한글로 문서화
- Props, 이벤트, 슬롯에 대한 상세 설명 필수
- Storybook을 통한 사용 예제 제공
- PrimeVue 원본 컴포넌트와의 차이점 명시

## 개발 환경 설정

```bash
# 프로젝트 설치
npm install

# 개발 서버 실행
npm run dev

# 타입 체크 및 빌드
npm run build

# 단위 테스트 실행
npm run test:unit

# 린트 검사
npm run lint
```

## 기여 방법

1. 이 저장소를 Fork합니다
2. 새로운 브랜치를 생성합니다
3. 변경사항을 커밋합니다
4. Pull Request를 생성합니다

## 커밋 메시지 규칙

```
type(scope): 메시지

# type: feat, fix, docs, style, refactor, test, chore
# scope: 선택사항
# 메시지: 한글로 작성
```

## 라이선스

MIT License

## 문의사항

이슈를 통해 문의해주세요.

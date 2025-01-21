import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  // 린트 대상 파일 지정
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  // 린트 제외 대상 지정
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Vue 기본 린트 규칙 적용
  ...pluginVue.configs['flat/essential'],
  // TypeScript 린트 규칙 적용
  ...vueTsEslintConfig(),

  // Vue 관련 상세 규칙
  {
    name: 'app/vue-rules',
    rules: {
      // 컴포넌트 이름은 PascalCase로 작성
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
      // 컴포넌트 옵션 이름도 PascalCase
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      // 커스텀 이벤트 이름은 camelCase
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      // Emit 선언은 타입 기반으로
      'vue/define-emits-declaration': ['error', 'type-based'],
      // Props 선언은 타입 기반으로
      'vue/define-props-declaration': ['error', 'type-based'],
      // Composition API 스타일은 <script setup>
      'vue/component-api-style': ['error', ['script-setup']],
      // 블록 순서 지정 (script -> template -> style)
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      // defineProps, defineEmits 매크로 순서
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineProps', 'defineEmits'],
        },
      ],
      // HTML 주석 스타일 규칙들
      'vue/html-comment-content-spacing': ['error', 'always'],
      'vue/html-comment-indent': ['error', 2],
      // nextTick은 Promise 스타일로 사용
      'vue/next-tick-style': ['error', 'promise'],
      // ref 객체 구조분해 금지
      'vue/no-ref-object-destructure': 'error',
      // 사용하지 않는 ref 금지
      'vue/no-unused-refs': 'error',
      // 블록 간 빈 줄 필수
      'vue/padding-line-between-blocks': ['error', 'always'],
      // 정적 클래스와 동적 클래스 분리
      'vue/prefer-separate-static-class': 'error',
      // name 속성 필수
      'vue/require-name-property': 'error',
      // 스크립트 들여쓰기 2칸
      'vue/script-indent': ['error', 2],
      // 정적 클래스 이름 순서 강제
      'vue/static-class-names-order': 'error',
    },
  },

  // TypeScript 관련 규칙
  {
    name: 'app/typescript-rules',
    rules: {
      // 타입 import 일관성 유지
      '@typescript-eslint/consistent-type-imports': 'error',
      // 함수 반환 타입 명시 필수
      '@typescript-eslint/explicit-function-return-type': 'error',
      // any 타입 사용 금지
      '@typescript-eslint/no-explicit-any': 'error',
      // 사용하지 않는 변수 금지
      '@typescript-eslint/no-unused-vars': 'error',
      // 네이밍 컨벤션 규칙
      '@typescript-eslint/naming-convention': [
        'error',
        // 인터페이스는 I로 시작하는 PascalCase
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        // 타입 별칭은 T로 시작하는 PascalCase
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          prefix: ['T'],
        },
      ],
    },
  },

  // Vitest 테스트 파일 규칙 적용
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  // 테스트 파일 관련 규칙
  {
    name: 'app/test-rules',
    files: ['**/*.spec.ts'],
    rules: {
      // test 대신 it 사용
      'vitest/consistent-test-it': ['error', { fn: 'it' }],
      // expect 구문 필수
      'vitest/expect-expect': 'error',
      // 중복 훅 금지
      'vitest/no-duplicate-hooks': 'error',
      // 중복 테스트 제목 금지
      'vitest/no-identical-title': 'error',
      // toBe 사용 권장
      'vitest/prefer-to-be': 'error',
      // 최상위 describe 필수
      'vitest/require-top-level-describe': 'error',
    },
  },

  // Prettier 포맷팅 규칙 스킵
  skipFormatting,
]

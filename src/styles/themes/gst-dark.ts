import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

// PrimeVue 다크 테마 프리셋 확장
export const GstDarkPreset = definePreset(Aura, {
  // 프리미티브 토큰 정의
  primitive: {
    // 오렌지 계열의 프리미티브 컬러 (라이트 테마와 동일)
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#ff6600',
      600: '#dd6600',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    // 다크모드 전용 그레이 스케일
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
  },

  // 시맨틱 토큰 정의
  semantic: {
    // 프리미티브 토큰을 참조하여 시맨틱 컬러 정의
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
    // 다크모드 컬러 스킴
    colorScheme: {
      dark: {
        // 메인 컬러
        'primary-color': '{orange.400}',
        'primary-hover-color': '{orange.300}',
        'primary-hover-bg': 'rgba(251, 146, 60, 0.2)',

        // 보조 컬러
        'secondary-color': '{gray.300}',
        'secondary-hover-color': '{gray.200}',
        'secondary-hover-bg': 'rgba(209, 213, 219, 0.2)',

        // 상태 컬러
        'success-color': '#4ade80',
        'warning-color': '#fbbf24',
        'danger-color': '#f87171',
        'info-color': '#38bdf8',

        // 표면 컬러
        'surface-ground': '{gray.900}',
        'surface-section': '{gray.800}',
        'surface-card': '{gray.800}',
        'surface-overlay': '{gray.800}',
        'surface-border': '{gray.700}',
        'surface-hover': '{gray.700}',

        // 텍스트 컬러
        'text-color': '{gray.100}',
        'text-color-secondary': '{gray.400}',
        'text-color-disabled': '{gray.500}',
      },
    },
  },

  // 컴포넌트 토큰 정의 (라이트 테마와 동일한 구조 유지)
  components: {
    button: {
      root: {
        style: {
          borderRadius: '0.375rem',
          padding: '0.5rem 1rem',
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
    inputtext: {
      root: {
        style: {
          borderRadius: '0.375rem',
          padding: '0.5rem 0.75rem',
        },
      },
    },
    dropdown: {
      root: {
        class: ['gst-dropdown'],
        style: {
          borderRadius: 'var(--border-radius)',
        },
      },
      item: {
        class: ['gst-dropdown-item'],
      },
    },
  },
});

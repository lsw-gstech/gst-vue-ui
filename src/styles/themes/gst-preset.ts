import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

// props 타입 정의
interface ComponentProps {
  [key: string]: any;
}

// PrimeVue 테마 프리셋 확장
export const GstPreset = definePreset(Aura, {
  // 프리미티브 토큰 정의
  primitive: {
    // 오렌지 계열의 프리미티브 컬러 정의
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#ff6600', // GST 메인 컬러
      600: '#dd6600',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
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
    // 다크모드 대응
    colorScheme: {
      light: {
        'primary-color': '{orange.500}',
        'primary-hover-color': '{orange.600}',
        'surface-ground': '#f8f9fa',
        'surface-card': '#ffffff',
      },
      dark: {
        'primary-color': '{orange.400}',
        'primary-hover-color': '{orange.300}',
        'surface-ground': '#1f2937',
        'surface-card': '#1e293b',
      },
    },
  },

  // 컴포넌트 토큰 정의
  components: {
    // 입력 필드 컴포넌트 토큰
    inputtext: {
      root: {
        style: {
          borderRadius: '0.375rem',
          padding: '0.5rem 0.75rem',
        },
      },
    },
    // 드롭다운 컴포넌트 스타일
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

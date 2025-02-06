// PrimeVue 테마 프리셋 확장
export const GstPreset = {
  name: 'gst',
  baseTheme: 'aura',
  dark: false,
  colors: {
    // 메인 컬러
    'primary-color': '#ff6600',
    'primary-color-hover': '#dd6600',
    'primary-hover-bg': 'rgba(37, 99, 235, 0.1)',

    // 보조 컬러
    'secondary-color': '#64748b',
    'secondary-color-hover': '#475569',
    'secondary-hover-bg': 'rgba(100, 116, 139, 0.1)',

    // 상태 컬러
    'success-color': '#22c55e',
    'warning-color': '#f59e0b',
    'danger-color': '#ef4444',
    'info-color': '#0ea5e9',

    // 표면 컬러
    'surface-ground': '#f8f9fa',
    'surface-section': '#ffffff',
    'surface-card': '#ffffff',
    'surface-overlay': '#ffffff',
    'surface-border': '#dfe7ef',
    'surface-hover': '#f6f9fc',

    // 텍스트 컬러
    'text-color': '#495057',
    'text-color-secondary': '#6c757d',
    'text-color-disabled': '#9ea4ab',
  },
  variables: {
    // 간격
    'spacing-xs': '0.25rem',
    'spacing-sm': '0.5rem',
    'spacing-md': '1rem',
    'spacing-lg': '1.5rem',
    'spacing-xl': '2rem',

    // 테두리
    'border-radius': '0.375rem',
    'border-radius-sm': '0.25rem',
    'border-radius-lg': '0.5rem',
    'border-radius-xl': '0.75rem',
    'border-radius-full': '9999px',

    // 그림자
    'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',

    // 포커스
    'focus-ring': '0 0 0 2px var(--primary-100)',
    'focus-ring-offset': '2px',

    // 애니메이션
    'transition-duration': '0.2s',
    'transition-timing': 'ease-in-out',

    // 폰트
    'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    'font-size': '1rem',
    'font-weight-normal': '400',
    'font-weight-medium': '500',
    'font-weight-bold': '600',
  },
  components: {
    // 버튼 컴포넌트 스타일
    button: {
      root: {
        class: ['gst-button'],
        style: {
          padding: 'var(--spacing-md)',
          borderRadius: 'var(--border-radius)',
          transition: 'all var(--transition-duration) var(--transition-timing)',
        },
      },
    },
    // 입력 필드 컴포넌트 스타일
    inputtext: {
      root: {
        class: ['gst-input'],
        style: {
          borderRadius: 'var(--border-radius)',
          transition: 'all var(--transition-duration) var(--transition-timing)',
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
};

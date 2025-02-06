// PrimeVue 다크 테마 프리셋 확장
export const GstDarkPreset = {
  name: 'gst-dark',
  baseTheme: 'aura-dark',
  dark: true,
  colors: {
    // 메인 컬러 (라이트 테마와 동일)
    'primary-color': '#ff6600',
    'primary-color-hover': '#dd6600',
    'primary-hover-bg': 'rgba(37, 99, 235, 0.2)',

    // 보조 컬러
    'secondary-color': '#94a3b8',
    'secondary-color-hover': '#cbd5e1',
    'secondary-hover-bg': 'rgba(148, 163, 184, 0.2)',

    // 상태 컬러 (더 밝은 색상)
    'success-color': '#4ade80',
    'warning-color': '#fbbf24',
    'danger-color': '#f87171',
    'info-color': '#38bdf8',

    // 표면 컬러 (다크 모드)
    'surface-ground': '#1a1a1a',
    'surface-section': '#242424',
    'surface-card': '#2a2a2a',
    'surface-overlay': '#2a2a2a',
    'surface-border': '#383838',
    'surface-hover': '#333333',

    // 텍스트 컬러 (다크 모드)
    'text-color': '#e5e7eb',
    'text-color-secondary': '#9ca3af',
    'text-color-disabled': '#6b7280',
  },
  // variables와 components는 라이트 테마와 동일
};

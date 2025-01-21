import type { ButtonProps as PrimeButtonProps } from 'primevue/button'

export interface IButtonProps extends /* @vue-ignore */ PrimeButtonProps {
  /** 버튼 텍스트 */
  label?: string
  /** 버튼 비활성화 상태 */
  disabled?: boolean
  /** 버튼 로딩 상태 */
  loading?: boolean
  /** 버튼 스타일 변형 */
  variant?: 'filled' | 'outlined' | 'text'
  /** 버튼 크기 */
  size?: 'small' | 'large'
  /** 버튼 심각도 */
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
  /** 버튼 아이콘 (PrimeVue 아이콘 이름) */
  icon?: string
  /** 아이콘만 표시 */
  iconOnly?: boolean
}

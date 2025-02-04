import type { InputTextProps } from 'primevue/inputtext';

export type InputType = 'text' | 'number' | 'password' | 'email' | 'search';
export type InputSize = 'small' | 'normal' | 'large';
export type InputValidationState = 'success' | 'warning' | 'error';

export interface InputProps extends /* @vue-ignore */ Omit<InputTextProps, 'size' | 'modelValue'> {
  /** 입력 필드 타입 */
  type?: InputType;
  /** 입력 필드 크기 */
  size?: InputSize;
  /** 입력값 */
  modelValue: string;
  /** Placeholder 텍스트 */
  placeholder?: string;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 읽기 전용 상태 */
  readonly?: boolean;
  /** 접두 아이콘 */
  prefixIcon?: string;
  /** 접미 아이콘 */
  suffixIcon?: string;
  /** 유효성 검사 상태 */
  validationState?: InputValidationState;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 텍스트 삭제 버튼 표시 여부 */
  clearable?: boolean;
}

export interface IRadioOption {
  value: any;
  label: string;
  disabled?: boolean;
}

export interface IRadioProps {
  /** 선택된 값 */
  modelValue: any;
  /** 라디오 옵션 목록 */
  options: IRadioOption[];
  /** 인라인 레이아웃 여부 */
  inline?: boolean;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 유효성 검사 상태 */
  validationState?: 'success' | 'warning' | 'error';
  /** 에러 메시지 */
  errorMessage?: string;
}

import type { DropdownProps } from 'primevue/dropdown';
import type { MultiSelectProps } from 'primevue/multiselect';

export interface ISelectOption {
  /** 옵션 값 */
  value: any;
  /** 표시될 텍스트 */
  label: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 그룹 식별자 */
  groupId?: string | number;
}

export interface ISelectGroup {
  /** 그룹 식별자 */
  id: string | number;
  /** 그룹 레이블 */
  label: string;
}

export interface ISelectProps extends Omit<DropdownProps, 'modelValue' | 'options'> {
  /** 선택된 값 */
  modelValue?: any | any[];
  /** 다중 선택 여부 */
  multiple?: boolean;
  /** 옵션 목록 */
  options?: ISelectOption[];
  /** 옵션 그룹 목록 */
  groups?: ISelectGroup[];
  /** 검색 기능 활성화 */
  searchable?: boolean;
  /** Placeholder 텍스트 */
  placeholder?: string;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 유효성 검사 상태 */
  validationState?: 'success' | 'warning' | 'error';
  /** 에러 메시지 */
  errorMessage?: string;
}

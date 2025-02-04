import type { DropdownProps } from 'primevue/dropdown';

export interface SelectProps extends /* @vue-ignore */ Omit<DropdownProps, 'size'> {
  modelValue: any;
  options?: any[];
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
  placeholder?: string;
  filter?: boolean;
  filterMatchMode?: string;
  filterPlaceholder?: string;
  filterLocale?: string;
  filterFields?: string[];
  editable?: boolean;
  showClear?: boolean;
  loading?: boolean;
  disabled?: boolean;
  size?: 'small' | 'normal' | 'large';
}

import type { DropdownProps } from 'primevue/dropdown';

export interface SelectOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface SelectGroup {
  label: string;
  items: SelectOption[];
  disabled?: boolean;
}

export interface SelectProps extends /* @vue-ignore */ Omit<DropdownProps, 'size' | 'modelValue'> {
  modelValue: any;
  options?: (SelectOption | SelectGroup)[];
  optionLabel?: string;
  optionValue?: string;
  optionDisabled?: string;
  optionGroupLabel?: string;
  optionGroupChildren?: string;
  placeholder?: string;
  filter?: boolean;
  filterMatchMode?: 'contains' | 'startsWith' | 'endsWith';
  filterPlaceholder?: string;
  filterLocale?: string;
  filterFields?: string[];
  editable?: boolean;
  showClear?: boolean;
  loading?: boolean;
  disabled?: boolean;
  size?: 'small' | 'normal' | 'large';
}

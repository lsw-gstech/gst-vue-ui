import type { CheckboxProps } from 'primevue/checkbox';

export interface ICheckboxProps {
  modelValue: boolean;
  label?: string;
  indeterminate?: boolean;
  disabled?: boolean;
  customIcon?: string;
  validationState?: 'success' | 'warning' | 'error';
  errorMessage?: string;
}

export interface ICheckboxOption {
  value: any;
  label: string;
  disabled?: boolean;
}

export interface ICheckboxGroupProps {
  modelValue: any[];
  options: ICheckboxOption[];
  disabled?: boolean;
  validationState?: 'success' | 'warning' | 'error';
  errorMessage?: string;
}

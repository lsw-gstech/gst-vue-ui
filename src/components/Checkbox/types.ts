import type { CheckboxProps as PrimeCheckboxProps } from 'primevue/checkbox';

export interface ICheckboxProps extends PrimeCheckboxProps {
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
  inline?: boolean;
  disabled?: boolean;
  validationState?: 'success' | 'warning' | 'error';
  errorMessage?: string;
}

export interface CheckboxProps extends Omit<PrimeCheckboxProps, 'modelValue'> {
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
  validationState?: 'success' | 'warning' | 'error';
  errorMessage?: string;
}

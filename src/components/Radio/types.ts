import type { RadioButtonProps } from 'primevue/radiobutton';

export interface IRadioOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface RadioProps
  extends /* @vue-ignore */ Omit<RadioButtonProps, 'modelValue' | 'size'> {
  modelValue: string | number;
  value: string | number;
  label?: string;
  name?: string;
  disabled?: boolean;
  size?: 'small' | 'normal' | 'large';
  validationState?: 'success' | 'warning' | 'error';
}

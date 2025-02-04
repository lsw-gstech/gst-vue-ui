import type { RadioButtonProps } from 'primevue/radiobutton';

export interface IRadioOption {
  value: any;
  label: string;
  disabled?: boolean;
}

export interface RadioProps extends /* @vue-ignore */ Omit<RadioButtonProps, 'modelValue'> {
  modelValue: any;
  value: any;
  label?: string;
  name?: string;
  disabled?: boolean;
}

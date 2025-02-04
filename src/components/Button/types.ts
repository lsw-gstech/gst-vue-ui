import type { ButtonProps as PrimeButtonProps } from 'primevue/button';

export interface ButtonProps extends /* @vue-ignore */ Omit<PrimeButtonProps, 'size' | 'severity'> {
  label?: string;
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'small' | 'normal' | 'large';
  loading?: boolean;
  disabled?: boolean;
  icon?: string;
  iconPos?: 'left' | 'right' | 'top' | 'bottom';
}

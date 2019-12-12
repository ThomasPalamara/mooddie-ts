import { ReactNode } from 'react';

export interface TextFieldProps {
  name: string;
  type: string;
  value: string | number;
  className?: string;
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  noWrapper?: boolean;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

export interface ToastProps {
  message: string;
  type: 'error' | 'success' | 'warning';
}

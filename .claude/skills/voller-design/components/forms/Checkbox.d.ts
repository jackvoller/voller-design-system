import * as React from 'react';

/** Checkbox with a green fill and the Lucide check. Controlled. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;

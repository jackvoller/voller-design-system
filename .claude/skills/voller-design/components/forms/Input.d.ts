import * as React from 'react';

/** Single-line text field with optional label, hint and error line. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Replaces the hint and reddens the border. Errors use `--alert` (`--alert-light` on dark). */
  error?: string;
}

export declare function Input(props: InputProps): JSX.Element;

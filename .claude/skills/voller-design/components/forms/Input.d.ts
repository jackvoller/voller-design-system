import * as React from 'react';

/** Single-line text field with optional label, hint and error line. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Replaces the hint and darkens the border. Note: the palette has no red — errors read in green-dark. */
  error?: string;
}

export declare function Input(props: InputProps): JSX.Element;

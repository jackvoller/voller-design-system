import * as React from 'react';

/** Native select with brand chrome and a Lucide chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  /** Strings, or {value,label} pairs. Ignored if children are passed. */
  options?: Array<string | { value: string; label: string }>;
  children?: React.ReactNode;
}

export declare function Select(props: SelectProps): JSX.Element;

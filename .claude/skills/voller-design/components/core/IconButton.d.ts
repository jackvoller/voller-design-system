import * as React from 'react';

/** Square icon-only control. `label` is required — it becomes the accessible name. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'quiet' | 'bare';
  size?: 'sm' | 'md' | 'lg';
  onDark?: boolean;
  children?: React.ReactNode;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;

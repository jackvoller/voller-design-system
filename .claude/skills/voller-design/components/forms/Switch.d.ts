import * as React from 'react';

/** Capsule toggle for instant settings. The capsule is a system primitive — keep the pill radius. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onDark?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare function Switch(props: SwitchProps): JSX.Element;

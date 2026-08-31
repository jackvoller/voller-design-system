import * as React from 'react';

/** Uppercase monospace label — the only place a monospace is allowed. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'span' | 'p';
  onDark?: boolean;
  children?: React.ReactNode;
}

export declare function Eyebrow(props: EyebrowProps): JSX.Element;

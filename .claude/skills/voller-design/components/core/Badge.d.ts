import * as React from 'react';

/** Small pill for status and metadata. `gold` counts against the one-gold-per-view rule. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'green' | 'gold' | 'neutral' | 'dark' | 'solid';
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;

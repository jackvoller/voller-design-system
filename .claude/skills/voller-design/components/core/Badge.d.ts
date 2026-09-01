import * as React from 'react';

/** Small pill for status and metadata. `solid` is a filled yellow and counts against the
 *  one-rationed-element-per-view rule; the washed tones do not. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'yellow' | 'neutral' | 'dark' | 'solid' | /** @deprecated use 'yellow' */ 'green' | /** @deprecated use 'yellow' */ 'gold';
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;

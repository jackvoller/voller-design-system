import * as React from 'react';

/**
 * Surface container. Separation comes from a hairline or a background step —
 * this component deliberately has no shadow prop.
 *
 * @startingPoint section="Core" subtitle="Hairline surfaces, no shadows" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'white' | 'cream' | 'dark' | 'bare';
  /** px */
  padding?: number;
  radius?: 'card' | 'panel';
  /** Green hairline on hover — for cards that are links */
  interactive?: boolean;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;

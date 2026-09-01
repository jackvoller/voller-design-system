import * as React from 'react';

/**
 * The Voller button. Yellow is the primary, and it IS the rationed element —
 * at most one per view, on the thing the user came to do. `accent` is a
 * deprecated alias of `primary`, left from when gold was a separate colour.
 *
 * @startingPoint section="Core" subtitle="Yellow primary, wash quiet, bare text" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = yellow fill, once per view; accent = deprecated alias of primary; quiet = yellow-wash + hairline; text = bare link-button */
  variant?: 'primary' | 'accent' | 'quiet' | 'text';
  size?: 'sm' | 'md' | 'lg';
  /** Render as another element, e.g. 'a' for a link-button */
  as?: 'button' | 'a';
  full?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  /** Recolours quiet/text variants for a dark section */
  onDark?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;

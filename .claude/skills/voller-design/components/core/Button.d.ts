import * as React from 'react';

/**
 * The Voller button. Green is the default primary; `accent` is gold and obeys
 * the gold rule — at most one per view, on the thing the user came to do.
 *
 * @startingPoint section="Core" subtitle="Green primary, gold accent, quiet outline" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** primary = green fill; accent = gold (once per view); quiet = hairline outline; text = bare link-button */
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

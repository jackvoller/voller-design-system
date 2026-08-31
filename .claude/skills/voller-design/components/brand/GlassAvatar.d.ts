import * as React from 'react';

/**
 * Any circular image or initial on the web wears the glass ring at r+7%.
 * This is what makes a page feel like it belongs to the icon family.
 */
export interface GlassAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  /** Outer diameter in px */
  size?: number;
  onDark?: boolean;
  /** Initials or a glyph, when no src */
  children?: React.ReactNode;
}

export declare function GlassAvatar(props: GlassAvatarProps): JSX.Element;

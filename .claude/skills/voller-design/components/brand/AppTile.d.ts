import * as React from 'react';

/**
 * A shipped app icon rendered at the system's 23.5% squircle radius.
 * Icons are never shown circular and never carry a drop shadow.
 *
 * @startingPoint section="Brand" subtitle="The five app icons at squircle radius" viewport="700x150"
 */
export interface AppTileProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  app?: 'voller' | 'unpickle' | 'mealplanner' | 'unjumble' | 'riverly';
  /** px */
  size?: number;
  variant?: 'light' | 'dark' | 'tinted';
  /** Relative path to assets/app-icons from the consuming file. */
  assetPath?: string;
}

export declare function AppTile(props: AppTileProps): JSX.Element;

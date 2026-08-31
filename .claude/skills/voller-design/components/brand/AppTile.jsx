import React from 'react';

const APPS = {
  voller: 'Voller',
  unpickle: 'UnPickle',
  mealplanner: 'Meal Planner',
  unjumble: 'UnJumble',
  riverly: 'Riverly',
};

export function AppTile({ app = 'voller', size = 72, variant = 'light', assetPath = '../../assets/app-icons', alt, style, ...rest }) {
  const suffix = variant === 'light' ? '' : `-${variant}`;
  return (
    <img
      src={`${assetPath}/${app}${suffix}.png`}
      alt={alt || `${APPS[app] || app} app icon`}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        flex: 'none',
        display: 'block',
        borderRadius: 'var(--radius-icon)',
        background: variant === 'dark' ? 'var(--ink)' : 'transparent',
        ...style,
      }}
      {...rest}
    />
  );
}

import * as React from 'react';

/**
 * The Voller wordmark: the word plus one gold app tile as a full stop.
 * Do not place the circular icon beside it in a header — they are two focal
 * points saying the same thing. The footer is the one exception.
 *
 * @startingPoint section="Brand" subtitle="Word + gold tile, header through hero sizes" viewport="700x150"
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLElement> {
  /** Cap-height driver in px. 22 header, 32 mid, 64 hero. */
  size?: number;
  onDark?: boolean;
  as?: 'a' | 'div' | 'span';
}

export declare function Wordmark(props: WordmarkProps): JSX.Element;

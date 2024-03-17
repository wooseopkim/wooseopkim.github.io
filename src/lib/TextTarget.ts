import type { HTMLAttributes } from 'astro/types';

export type TextTarget<T extends keyof astroHTML.JSX.DefinedIntrinsicElements> =
  'textContent' | HTMLAttributes<T>;

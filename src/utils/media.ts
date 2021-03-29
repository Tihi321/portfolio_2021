export const Breakpoints = {
  MOBILE: [0, 380],
  TABLET: [381, 768],
  LAPTOP: [769, 1024],
  DESKTOP: [1025, 1440]
};

export enum ESide {
  UP = "up",
  DOWN = "down"
}

export type TMediaProps = (breakpoint: number[], side?: ESide) => string;

export const media: TMediaProps = (breakpoint, side) => {
  switch (side) {
    case ESide.UP:
      return `@media (min-width: ${breakpoint[0]}px)`;
    case ESide.DOWN:
      return `@media (max-width: ${breakpoint[1]}px)`;
    default:
      return `@media (min-width: ${breakpoint[0]}px) and (max-width: ${breakpoint[1]}px)`;
  }
};

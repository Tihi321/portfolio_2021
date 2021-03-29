import { EBreakpoints } from "../themes/types";

export const Breakpoints = {
  [EBreakpoints.MOBILE]: [0, 380],
  [EBreakpoints.TABLET]: [381, 768],
  [EBreakpoints.LAPTOP]: [769, 1024],
  [EBreakpoints.DESKTOP]: [1025, 1440]
};

export enum ESide {
  UP = "up",
  DOWN = "down",
  MIDDLE = "middle"
}

export type TMediaProps = (breakpoint: EBreakpoints, side?: ESide) => string;

export const media: TMediaProps = (breakpoint, side) => {
  switch (side) {
    case ESide.UP:
      return `@media (min-width: ${Breakpoints[breakpoint][0]}px)`;
    case ESide.DOWN:
      return `@media (max-width: ${Breakpoints[breakpoint][1]}px)`;
    case ESide.MIDDLE:
      return `@media (min-width: ${Breakpoints[breakpoint][0]}px) and (max-width: ${Breakpoints[breakpoint][1]}px)`;
    default:
      return `@media (min-width: ${Breakpoints[breakpoint][0]}px)`;
  }
};

import { Breakpoints, EBreakpoints, ESide } from "../enums";

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

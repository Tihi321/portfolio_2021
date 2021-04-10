import { useMediaQuery as useResponsive } from "react-responsive";

import { createMediaQueryCommand, TMediaProps } from "../utils";

export const useMediaQuery: TMediaProps = (breakpoint, side) =>
  useResponsive({
    query: createMediaQueryCommand(breakpoint, side)
  });

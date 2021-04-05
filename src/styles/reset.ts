import { css } from "styled-components";

import { EBreakpoints, ESide } from "../enums";
import { media } from "../utils";

export const resetFontStyles = css`
  line-height: 1;
  font-size: 1em;
`;

export const resetLinkStyles = css`
  position: static;
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    &:hover {
      top: initial;
    }
  }
`;

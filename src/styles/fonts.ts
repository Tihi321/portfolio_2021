import { css } from "styled-components";

import { EBreakpoints } from "../enums";
import { themeFonts } from "../themes";

const responsiveFontStyles = (key: string, breakpoint: EBreakpoints) => css`
  font-size: ${props => themeFonts(props)[key][breakpoint].fontSize};
  line-height: ${props => themeFonts(props)[key][breakpoint].lineHeight};
  ${props =>
    themeFonts(props)[key][breakpoint].fontWeight &&
    `font-weight: ${themeFonts(props)[key][breakpoint].fontWeight}`};
  ${props =>
    themeFonts(props)[key][breakpoint].fontFamily &&
    `font-family: ${themeFonts(props)[key][breakpoint].fontFamily}`};
`;

export const featuredButtonResponsiveFontStyles = (breakpoint: EBreakpoints) =>
  responsiveFontStyles("featuredButtonResponsive", breakpoint);

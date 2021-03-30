import { css } from "styled-components";

import { CoreStylesClass, EBreakpoints, ESide } from "../enums";
import { backgroundColor, linkColor, textColor } from "../themes/index";
import { media } from "../utils";
import {
  bodyResponsiveFontStyles,
  heading01ResponsiveFontStyles,
  heading02ResponsiveFontStyles
} from "./fonts";

export const coreStyles = css`
  body,
  .${CoreStylesClass} {
    background-color: ${backgroundColor};
    color: ${textColor};
    margin: 0;
    padding: 58px 30px;
    display: flex;
    justify-content: center;
  }

  p,
  body,
  .${CoreStylesClass} {
    ${bodyResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${bodyResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  p {
    padding-bottom: 30px;
  }

  h1 {
    padding-bottom: 20px;
    ${heading01ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding-bottom: 30px;
      ${heading01ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h2 {
    padding-bottom: 15px;
    ${heading02ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding-bottom: 20px;
      ${heading02ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  a {
    color: ${linkColor};
    text-decoration: none;
    display: inline-block;
    position: relative;

    &:hover {
      top: 1px;
    }
  }
`;

import { css } from "styled-components";

import { CoreStylesClass, EBreakpoints, ESide } from "../enums";
import {
  asideBackgroundColor,
  asideColor,
  backgroundColor,
  blockquoteColor,
  codeBackgroundColor,
  linkColor,
  markBackgroundColor,
  markColor,
  textColor
} from "../themes/index";
import { media } from "../utils";
import {
  blockquoteResponsiveFontStyles,
  bodyResponsiveFontStyles,
  heading01ResponsiveFontStyles,
  heading02ResponsiveFontStyles,
  heading03ResponsiveFontStyles,
  heading04ResponsiveFontStyles,
  listResponsiveFontStyles
} from "./fonts";

export const coreStyles = css`
  #___gatsby {
    width: 100%;
  }
  body,
  .${CoreStylesClass} {
    background-color: ${backgroundColor};
    color: ${textColor};
    margin: 0;
    padding: 20px;

    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding: 55px 30px;
    }
  }

  body,
  .${CoreStylesClass} {
    ${bodyResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${bodyResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }
`;

export const headingStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  h1 {
    padding-bottom: 20px;
    ${heading01ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding-bottom: 30px;
      ${heading01ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 15px;
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding-bottom: 20px;
    }
  }

  h2 {
    ${heading02ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading02ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h3 {
    ${heading03ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading03ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h4,
  h5,
  h6 {
    ${heading04ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading04ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }
`;

export const textStyles = css`
  dl,
  p {
    padding-bottom: 30px;
    margin: 0px;
    ${bodyResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${bodyResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  dd {
    margin-left: 25px;
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

  mark {
    color: ${markColor};
    background-color: ${markBackgroundColor};
  }

  blockquote {
    padding-left: 15px;
    margin: 0px 25px 20px;
    border-left-width: 3px;
    border-left-style: solid;
    border-color: ${blockquoteColor};
    ${blockquoteResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      margin: 0px 30px 30px;
      ${blockquoteResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  aside {
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 4px;
    border-left: 8px solid ${asideColor};
    background-color: ${asideBackgroundColor};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding: 30px;
    }
  }

  code {
    background-color: ${codeBackgroundColor};
    border-radius: 5px;
    padding: 3px 5px;
  }
`;

export const tableStyles = css`
  ul,
  ol {
    padding: 0px;
    margin: 0px 0px 25px 20px;
    list-style-position: outside;
    list-style-image: none;
    ${listResponsiveFontStyles(EBreakpoints.MOBILE)}
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${listResponsiveFontStyles(EBreakpoints.LAPTOP)}
      margin: 0px 0px 30px 30px;
      list-style-image: none;
    }
  }
  li {
    margin-bottom: 0px;
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      margin-bottom: 5px;
    }
  }
`;

import { EBreakpoints, TFontStyle, TResponsiveStyles } from "../themes";
import { media } from "./media";

export const addSelectorArguments = (selector, ...args) =>
  selector.bind(null, ...args);

export const generateFontStyle = (style: TFontStyle): string => {
  const output = [
    `font-size: ${style.fontSize}`,
    `line-height: ${style.lineHeight}`
  ];

  if (style.fontWeight) {
    output.push(`font-weight: ${style.fontWeight}`);
  }

  if (style.fontFamily) {
    output.push(`font-family: ${style.fontFamily}`);
  }

  return output.join(";");
};

export const parseResponsiveStyle = (styles: TResponsiveStyles, parser) =>
  Object.keys(styles)
    .map(key => `${media(key as EBreakpoints)}{${parser(styles[key])}}`)
    .join();

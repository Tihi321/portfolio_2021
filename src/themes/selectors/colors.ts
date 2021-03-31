import { createThemeSelector } from "../utils";

const themeColors = props => props.theme.colors;

export const focusColor = createThemeSelector(
  themeColors,
  colors => colors.focus
);

export const primaryColor = createThemeSelector(
  themeColors,
  colors => colors.primary
);

export const secondaryColor = createThemeSelector(
  themeColors,
  colors => colors.secondary
);

export const tertiaryColor = createThemeSelector(
  themeColors,
  colors => colors.tertiary
);

export const tertiarySemiTransparenColor = createThemeSelector(
  themeColors,
  colors => colors.tertiarySemiTransparent
);

export const textColor = createThemeSelector(
  themeColors,
  colors => colors.fontColor
);

export const backgroundColor = focusColor;
export const logoBackgroundColor = primaryColor;
export const logoForegroundColor = focusColor;
export const featuredButtonBackgroundColor = primaryColor;
export const featuredButtonColor = focusColor;
export const linkColor = secondaryColor;
export const blockquoteColor = secondaryColor;
export const asideColor = secondaryColor;
export const asideBackgroundColor = tertiarySemiTransparenColor;
export const markColor = focusColor;
export const markBackgroundColor = secondaryColor;

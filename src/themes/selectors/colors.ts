import { createThemeSelector } from "../utils";

const themeColors = props => props.theme.colors;

export const backgroundColor = createThemeSelector(
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

export const textColor = createThemeSelector(
  themeColors,
  colors => colors.fontColor
);

export const logoBackgroundColor = primaryColor;
export const logoForegroundColor = backgroundColor;
export const featuredButtonBackgroundColor = primaryColor;
export const featuredButtonColor = backgroundColor;

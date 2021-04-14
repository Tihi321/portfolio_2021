import { ThemeProps } from "styled-components";
import { createSelector } from "reselect";

const themeColors = (state: ThemeProps<any>) => state.theme.colors;

export const focusColor = createSelector(themeColors, colors => colors.focus);

export const primaryColor = createSelector(
  themeColors,
  colors => colors.primary
);

export const secondaryColor = createSelector(
  themeColors,
  colors => colors.secondary
);

export const tertiaryColor = createSelector(
  themeColors,
  colors => colors.tertiary
);

export const tertiarySemiTransparenColor = createSelector(
  themeColors,
  colors => colors.tertiarySemiTransparent
);

export const textColor = createSelector(
  themeColors,
  colors => colors.fontColor
);

export const backgroundColor = focusColor;
export const logoBackgroundColor = primaryColor;
export const logoForegroundColor = focusColor;
export const featuredButtonBackgroundColor = primaryColor;
export const featuredButtonColor = focusColor;
export const linkColor = secondaryColor;
export const tagButtonColor = tertiaryColor;
export const tagPrimaryTextColor = tertiaryColor;
export const tagSecondaryTextColor = secondaryColor;
export const tagTertiaryTextColor = primaryColor;
export const featuredTagColor = secondaryColor;
export const wideButtonColor = secondaryColor;
export const bottomLineBorderColor = tertiarySemiTransparenColor;
export const blockquoteColor = secondaryColor;
export const asideColor = secondaryColor;
export const asideBackgroundColor = tertiarySemiTransparenColor;
export const codeBackgroundColor = tertiarySemiTransparenColor;
export const markColor = focusColor;
export const markBackgroundColor = secondaryColor;

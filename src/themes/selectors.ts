import { generateFontStyle } from "../utils";
import { EBreakpoints } from "./types";

export const backgroundColor = props => props.theme.colors.focus;
export const primaryColor = props => props.theme.colors.primary;
export const secondaryColor = props => props.theme.colors.secondary;
export const tertiaryColor = props => props.theme.colors.tertiary;
export const textColor = props => props.theme.colors.fontColor;
export const logoBackgroundColor = primaryColor;
export const logoForegroundColor = backgroundColor;
export const featuredButtonBackgroundColor = primaryColor;
export const featuredButtonColor = backgroundColor;

export const featuredButtonResponsiveStyles = (
  mediaBreakpoint: EBreakpoints,
  props
) =>
  generateFontStyle(
    props.theme.fonts.featuredButtonResponsive[mediaBreakpoint]
  );

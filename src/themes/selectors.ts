export const backgroundColor = props => props.theme.colors.focus;
export const primaryColor = props => props.theme.colors.primary;
export const secondaryColor = props => props.theme.colors.secondary;
export const tertiaryColor = props => props.theme.colors.tertiary;
export const textColor = props => props.theme.colors.fontColor;
export const logoBackgroundColor = primaryColor;
export const logoForegroundColor = backgroundColor;
export const featuredButtonBackgroundColor = primaryColor;
export const featuredButtonColor = backgroundColor;

export const featuredButtonFontFamily = props =>
  props.theme.fonts.fontbutton01.fontFamily;
export const featuredButtonFontSize = props =>
  props.theme.fonts.fontbutton01.fontSize;
export const featuredButtonFontWeight = props =>
  props.theme.fonts.fontbutton01.fontWeight;
export const featuredButtonLineHeight = props =>
  props.theme.fonts.fontbutton01.lineHeight;

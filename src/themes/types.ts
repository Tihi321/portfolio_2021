export enum EBreakpoints {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  LAPTOP = "LAPTOP",
  DESKTOP = "DESKTOP"
}

export type TResponsiveStyles = Record<EBreakpoints, { [key: string]: string }>;

export type TFontStyle = {
  fontSize: string;
  fontFamily?: string;
  fontWeight?: string;
  lineHeight: string;
};

import React from "react";
import styled from "styled-components";

import { EFontSizes, fontSizeThemeStyles, IFontSizes } from "../../styles";

interface ITextProps extends IFontSizes {
  text: string;
  className?: string;
}

const SpanStyled = styled(({ children, ...props }) => (
  <span {...props}>{children}</span>
))`
  ${fontSizeThemeStyles}
`;

export const Span = ({
  text,
  className,
  size = EFontSizes.Regular
}: ITextProps) => (
  <SpanStyled size={size} className={className}>
    {text}
  </SpanStyled>
);

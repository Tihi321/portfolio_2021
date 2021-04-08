import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions/styled/styled";
import { ETextSizes, ITextSizes, TextSize } from "../Common/TextSize";

interface ITextProps extends ITextSizes, IStyledProps {
  text: string;
}

const ParagraphStyled = styled.p`
  padding-bottom: 0;
`;

export const Paragraph = ({
  text,
  className,
  size = ETextSizes.Regular
}: ITextProps) => (
  <ParagraphStyled className={className}>
    <TextSize size={size}>{text}</TextSize>
  </ParagraphStyled>
);

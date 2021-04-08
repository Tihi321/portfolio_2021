import React from "react";
import styled from "styled-components";

import { IStyledProps } from "../../definitions/styled/styled";
import { EBreakpoints, ESide } from "../../enums";
import { tagsResponsiveFontStyles } from "../../styles";
import {
  tagPrimaryTextColor,
  tagSecondaryTextColor,
  tagTertiaryTextColor
} from "../../themes";
import { media } from "../../utils";

export enum ETagType {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary"
}

interface ITextProps extends IStyledProps {
  text: string;
  type?: ETagType.Primary | ETagType.Secondary | ETagType.Tertiary;
}

const TagStyled = styled(({ text, ...props }) => (
  <span {...props}>{text}</span>
))`
  cursor: pointer;
  display: inline-block;
  position: relative;
  font-style: italic;
  color: ${props => {
    switch (props.type) {
      case ETagType.Secondary:
        return tagSecondaryTextColor;
      case ETagType.Tertiary:
        return tagTertiaryTextColor;

      default:
        return tagPrimaryTextColor;
    }
  }};
  &::before {
    content: "#";
    font-size: 0.7em;
    padding-right: 2px;
  }

  ${tagsResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    ${tagsResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

export const TagText = ({
  text,
  className,
  type = ETagType.Primary
}: ITextProps) => <TagStyled type={type} className={className} text={text} />;
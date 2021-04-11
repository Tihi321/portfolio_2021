import React from "react";
import styled from "styled-components";

import { IContainerProps, IStyledProps } from "../../definitions";
import { EBreakpoints, ESide } from "../../enums";
import {
  featuredButtonResponsiveFontStyles,
  resetButtonStyles
} from "../../styles";
import {
  featuredButtonBackgroundColor,
  featuredButtonColor
} from "../../themes";
import { media } from "../../utils";

export enum EFeaturedButtonType {
  Regular = "regular",
  Wide = "wide"
}

interface IFeaturedButtonProps extends IStyledProps, IContainerProps {
  type?: EFeaturedButtonType;
  onClick: () => void;
}

const ButtonStyled = styled(({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
))`
  ${resetButtonStyles}
  padding: 10px 20px;
  cursor: pointer;
  color: ${featuredButtonColor};
  background-color: ${featuredButtonBackgroundColor};
  width: 100%;
  ${featuredButtonResponsiveFontStyles(EBreakpoints.MOBILE)};
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    border-radius: 5px;
    padding: 5px 15px;
    ${props =>
      props.type &&
      props.type === EFeaturedButtonType.Regular &&
      "width: auto;"}
    ${featuredButtonResponsiveFontStyles(EBreakpoints.LAPTOP)}
  }
`;

export const FeaturedButton = ({
  children,
  onClick,
  type = EFeaturedButtonType.Regular,
  className
}: IFeaturedButtonProps) => (
  <ButtonStyled type={type} onClick={onClick} className={className}>
    {children}
  </ButtonStyled>
);

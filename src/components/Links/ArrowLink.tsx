import { Link as GatsbyLink } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";

import { TextSize } from "~ts/components/Common";
import { EArrowLinkSides, EBreakpoints, ESide, ETextSizes } from "~ts/enums";
import LeftArrow from "~ts/images/left-arrow.inline.svg";
import RightArrow from "~ts/images/right-arrow.inline.svg";
import { resetLinkStyles } from "~ts/styles";
import { linkColor, textColor } from "~ts/themes";
import { IStyledProps, ITextSizes } from "~ts/typings";
import { media } from "~ts/utils";

interface ILinkProps extends ITextSizes, IStyledProps {
  text: string;
  to: string;
  side?: EArrowLinkSides;
}

const InternalStyled = styled(GatsbyLink)`
  ${resetLinkStyles}
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${textColor};
  transition: color 0.15s ease;
  &:hover {
    color: ${linkColor};

    svg {
      fill: ${linkColor};
    }
  }
`;

const arrowIconStyles = css`
  fill: ${textColor};
  width: 15px;
  transition: fill 0.15s ease;

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    width: 20px;
  }
`;

const LeftArrowStyled = styled(LeftArrow)`
  ${arrowIconStyles}
  margin-right: 10px;
`;

const RightArrowStyled = styled(RightArrow)`
  ${arrowIconStyles}
  margin-left: 10px;
`;

export const ArrowLink = ({
  text,
  to,
  className,
  side = EArrowLinkSides.Left,
  size = ETextSizes.Small
}: ILinkProps) => (
  <InternalStyled to={to} className={className}>
    {side === EArrowLinkSides.Left && <LeftArrowStyled />}
    <TextSize size={size}>{text}</TextSize>
    {side === EArrowLinkSides.Right && <RightArrowStyled />}
  </InternalStyled>
);

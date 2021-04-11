import React from "react";
import styled, { css } from "styled-components";

import { IContainerProps, IStyledProps } from "../../definitions";
import { EBreakpoints } from "../../enums";
import { media } from "../../utils";

const gridItemsRepeatStyles = items => css`
  grid-template-columns: minmax(40px, 25%) repeat(${items}, minmax(40px, 1fr)) minmax(
      40px,
      100px
    );
`;

const gridAutoFitRepeatStyles = css`
  grid-template-columns: minmax(40px, 25%) repeat(auto-fit, minmax(40px, 1fr));
`;

const RowStyled = styled(({ children, ...props }) => (
  <tr {...props}>{children}</tr>
))`
  display: grid;
  align-items: center;
  gap: 5px;

  ${media(EBreakpoints.LAPTOP)} {
    gap: 10px;
  }

  ${props =>
    props.children && props.children.length - 2 > 0
      ? gridItemsRepeatStyles(props.children.length - 2)
      : gridAutoFitRepeatStyles}
`;

interface IRowProps extends IStyledProps, IContainerProps {}

export const Row = ({ children, className }: IRowProps) => (
  <RowStyled className={className}>{children}</RowStyled>
);

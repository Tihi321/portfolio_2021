import React from "react";
import styled, { css } from "styled-components";

import { IStyledProps } from "../../definitions";

const gridItemsRepeatStyles = items => css`
  grid-template-columns: minmax(100px, 25%) repeat(${items}, minmax(100px, 1fr)) 100px;
`;

const gridAutoFitRepeatStyles = css`
  grid-template-columns: minmax(100px, 25%) repeat(auto-fit, minmax(100px, 1fr));
`;

const RowStyled = styled(({ children, ...props }) => (
  <tr {...props}>{children}</tr>
))`
  display: grid;
  align-items: center;

  ${props =>
    props.children && props.children.length - 2 > 0
      ? gridItemsRepeatStyles(props.children.length - 2)
      : gridAutoFitRepeatStyles}
`;

interface IRowProps extends IStyledProps {
  children: React.ReactNode;
}

export const Row = ({ children, className }: IRowProps) => (
  <RowStyled className={className}>{children}</RowStyled>
);

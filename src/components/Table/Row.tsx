import React from "react";
import styled, { css } from "styled-components";

import { IStyledProps } from "../../definitions/styled/styled";

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
    props.items && props.items - 2 > 0
      ? gridItemsRepeatStyles(props.items - 2)
      : gridAutoFitRepeatStyles}
`;

interface IRowProps extends IStyledProps {
  children: React.ReactNode;
  items?: number;
}

export const Row = ({ children, className, items }: IRowProps) => (
  <RowStyled items={items} className={className}>
    {children}
  </RowStyled>
);

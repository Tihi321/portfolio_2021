import React from "react";
import styled from "styled-components";

const RowCellStyled = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
interface IRowCellProps {
  children: React.ReactNode;
}

export const RowCell = ({ children }: IRowCellProps) => (
  <RowCellStyled>{children}</RowCellStyled>
);

export const EmptyRowCell = () => <RowCellStyled />;

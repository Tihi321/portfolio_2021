import React from "react";
import styled from "styled-components";

import { Row } from "./Row";

const HeaderRowStyled = styled(Row)`
  padding-bottom: 20px;
`;

interface IHeaderRowProps {
  children: React.ReactNode;
  items?: number;
}

export const HeaderRow = ({ children, items }: IHeaderRowProps) => (
  <HeaderRowStyled items={items}>{children}</HeaderRowStyled>
);

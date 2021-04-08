import React from "react";
import styled from "styled-components";

import { bottomLineBorderColor } from "../../themes";
import { Row } from "./Row";

const RowStyled = styled(Row)`
  border-bottom: 1px solid ${bottomLineBorderColor};
`;

interface IBodyRowProps {
  children: React.ReactNode;
}

export const BodyRow = ({ children }: IBodyRowProps) => (
  <RowStyled>{children}</RowStyled>
);

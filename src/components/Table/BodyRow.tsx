import React from "react";
import styled from "styled-components";

import { IContainerProps } from "../../definitions";
import { bottomLineBorderColor } from "../../themes";
import { Row } from "./Row";

const RowStyled = styled(Row)`
  border-bottom: 1px solid ${bottomLineBorderColor};
`;

export const BodyRow = ({ children }: IContainerProps) => (
  <RowStyled>{children}</RowStyled>
);

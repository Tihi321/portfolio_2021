import React from "react";
import styled from "styled-components";

import { bottomLineBorderColor } from "~ts/themes";
import { IContainerProps } from "~ts/typings";

import { Row } from "./Row";

const RowStyled = styled(Row)`
  border-bottom: 1px solid ${bottomLineBorderColor};
`;

export const BodyRow = ({ children }: IContainerProps) => (
  <RowStyled>{children}</RowStyled>
);

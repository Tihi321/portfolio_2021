import React from "react";

import { IContainerProps } from "../../definitions";
import { TableWrapper } from "./TableWrapper";

export const Table = ({ children }: IContainerProps) => (
  <TableWrapper>
    <table>{children}</table>
  </TableWrapper>
);

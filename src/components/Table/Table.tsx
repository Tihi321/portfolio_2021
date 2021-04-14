import { IContainerProps } from "@typings";
import React from "react";

import { TableWrapper } from "./TableWrapper";

export const Table = ({ children }: IContainerProps) => (
  <TableWrapper>
    <table>{children}</table>
  </TableWrapper>
);

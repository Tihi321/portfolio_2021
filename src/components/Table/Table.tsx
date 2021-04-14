import React from "react";

import { IContainerProps } from "~ts/typings";

import { TableWrapper } from "./TableWrapper";

export const Table = ({ children }: IContainerProps) => (
  <TableWrapper>
    <table>{children}</table>
  </TableWrapper>
);

import { MDXProvider as ReactMDXProvider } from "@mdx-js/react";
import React from "react";

import { IContainerProps } from "../../definitions";
import { PreWrapper } from "../Code";
import { Table } from "../Table";

const components = {
  table: Table,
  pre: PreWrapper
};

export const MDXProvider = ({ children }: IContainerProps) => (
  <ReactMDXProvider components={components}>{children}</ReactMDXProvider>
);

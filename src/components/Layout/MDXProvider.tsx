import { MDXProvider as ReactMDXProvider } from "@mdx-js/react";
import React from "react";

import { PreWrapper } from "../../blocks/Code";
import { IContainerProps } from "../../definitions";
import { Table } from "../Table";

const components = {
  table: Table,
  pre: PreWrapper
};

export const MDXProvider = ({ children }: IContainerProps) => (
  <ReactMDXProvider components={components}>{children}</ReactMDXProvider>
);

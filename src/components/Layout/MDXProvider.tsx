import { MDXProvider as ReactMDXProvider } from "@mdx-js/react";
import { IContainerProps } from "@typings";
import React from "react";

import { PreWrapper } from "@blocks";
import { Table } from "@components";

const components = {
  table: Table,
  pre: PreWrapper
};

export const MDXProvider = ({ children }: IContainerProps) => (
  <ReactMDXProvider components={components}>{children}</ReactMDXProvider>
);

import { MDXProvider as ReactMDXProvider } from "@mdx-js/react";
import React from "react";

import { Code, PreWrapper } from "~ts/blocks/Code";
import { Table } from "~ts/components/Table";
import { IContainerProps } from "~ts/typings";

const components = {
  table: Table,
  pre: PreWrapper,
  Code
};

export const MDXProvider = ({ children }: IContainerProps) => (
  <ReactMDXProvider components={components}>{children}</ReactMDXProvider>
);

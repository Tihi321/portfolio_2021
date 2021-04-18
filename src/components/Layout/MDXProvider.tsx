import { MDXProvider as ReactMDXProvider } from "@mdx-js/react";
import React from "react";

import { Code, PreWrapper } from "~ts/blocks/Code";
import { Grid } from "~ts/blocks/Grid";
import { Sandbox } from "~ts/blocks/Sandbox";
import { HeadScript, Table } from "~ts/components/Mdx";
import { IContainerProps } from "~ts/typings";

const components = {
  table: Table,
  pre: PreWrapper,
  CodeBlock: Code,
  GridBlock: Grid,
  SandboxBlock: Sandbox,
  HeadScript
};

export const MDXProvider = ({ children }: IContainerProps) => (
  <ReactMDXProvider components={components}>{children}</ReactMDXProvider>
);

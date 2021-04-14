declare module "mdx-utils" {
  import React from "react";
  import { ICodeProps } from "~ts/typings";

  export function preToCodeBlock(
    props: React.ReactNode
  ): ICodeProps | undefined;
}

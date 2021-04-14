declare module "mdx-utils" {
  import React from "react";
  import { ICodeProps } from "@typings";

  export function preToCodeBlock(
    props: React.ReactNode
  ): ICodeProps | undefined;
}

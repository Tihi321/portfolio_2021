import { MDXProvider as ReactMDXProvider } from "@mdx-js/react";
import React from "react";

import { Code, PreWrapper } from "~ts/blocks/Code";
import { Grid } from "~ts/blocks/Grid";
import { Lottie } from "~ts/blocks/Lottie";
import { Rive } from "~ts/blocks/Rive";
import { Sandbox } from "~ts/blocks/Sandbox";
import { Youtube } from "~ts/blocks/Youtube";
import { Table } from "~ts/components/Mdx";
import { IContainerProps } from "~ts/typings";
import { Data } from "../Data";

import { Assets, Files, Images } from "../Query";
import { HeadScript } from "./HeadScript";

const components = {
  table: Table,
  pre: PreWrapper,
  CodeBlock: Code,
  GridBlock: Grid,
  SandboxBlock: Sandbox,
  RiveBlock: Rive,
  AssetsBlock: Assets,
  DataBlock: Data,
  FilesBlock: Files,
  ImagesBlock: Images,
  YoutubeBlock: Youtube,
  LottieBlock: Lottie,
  HeadScript
};

export const MDXProvider = ({ children }: IContainerProps) => (
  <ReactMDXProvider components={components}>{children}</ReactMDXProvider>
);

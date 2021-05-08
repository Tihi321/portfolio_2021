import { select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import {
  ReactXR as ReactXRComponent,
  TImplementedComponents
} from "../ReactXR";

export const ReactXRBlocks = () => {
  const blockNames: TImplementedComponents[] = ["Boxes"];

  const blocks = select("Blocks", blockNames, blockNames[0], "OPTIONS");

  return <ReactXRComponent name={blocks} />;
};

const meta = {
  title: "Blocks/ReactXR"
};

export default meta as Meta;

import { select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { Aframe as AframeComponent, TImplementedComponents } from "../Aframe";

export const Aframe = () => {
  const blockNames: TImplementedComponents[] = ["ABox"];

  const blocks = select("Blocks", blockNames, blockNames[0], "OPTIONS");

  return <AframeComponent name={blocks} />;
};

const meta = {
  title: "Blocks/Aframe"
};

export default meta as Meta;

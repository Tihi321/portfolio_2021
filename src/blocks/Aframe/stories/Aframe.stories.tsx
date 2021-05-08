import { select } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import {
  AFrame as AframeComponent,
  AframeBlocks as AframeBlocksComponent,
  TImplementedComponents
} from "../Aframe";

export const AframeBlocks = () => {
  const blockNames: TImplementedComponents[] = ["ABox"];

  const blocks = select("Blocks", blockNames, blockNames[0], "OPTIONS");

  return <AframeBlocksComponent name={blocks} />;
};

export const Aframe = () => (
  <AframeComponent>
    <a-scene
      embedded
      xrextras-tap-recenter
      xrextras-almost-there
      xrextras-loading
      xrextras-runtime-error
      xrextras-gesture-detector
      xrweb
    >
      <a-camera position="0 2 2" />
      <a-box
        xrextras-one-finger-rotate
        position="0 0.5 0"
        material="color: #AD50FF;"
        shadow
      />
      <a-plane
        height="2000"
        width="2000"
        rotation="-90 0 0"
        material="shader: shadow; opacity: 0.67"
        shadow
      />
    </a-scene>
  </AframeComponent>
);

const meta = {
  title: "Blocks/Aframe"
};

export default meta as Meta;

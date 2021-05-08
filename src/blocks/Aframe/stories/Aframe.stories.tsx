import { boolean, select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import {
  AFrame as AframeComponent,
  AframeBlocks as AframeBlocksComponent,
  AFrameString as AFrameStringComponent,
  TImplementedComponents
} from "../Aframe";

declare let window: any;

export const AframeHtml = () => {
  const urlImageCheck = boolean("URL Image", true, "OPTIONS");
  const hashImage =
    window && window.location.hash && window.location.hash.substring(1);
  const imageDef =
    "https://upload.wikimedia.org/wikipedia/commons/a/a5/Harderwijk_harbour_2018_-_360_panorama.jpg";
  const image = urlImageCheck && hashImage ? hashImage : imageDef;
  const ABox = `<a-scene embedded xrweb><a-assets>
  <img src="${image}" id="360photo" />
  </a-assets>
  <a-sky src="#360photo"></a-sky></a-scene>`;

  const html = text("Html", ABox, "OPTIONS");

  return <AFrameStringComponent sceneHtml={html} />;
};

AframeHtml.parameters = {
  knobs: {
    timestamps: true,
    escapeHTML: false
  }
};

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

/// <reference path="../../../definitions/images/svg.d.ts" />

import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import netwokNodesImage from "../../../assets/images/network-nodes.svg";
import { ImageLink as ImageLinkComponent } from "../ImageLink";

export const ImageLink = () => {
  const linkText = text("Link Text", "Post title", "OPTIONS");

  return <ImageLinkComponent src={netwokNodesImage} alt={linkText} to="./" />;
};

const meta = {
  title: "Components/Link"
};

export default meta as Meta;

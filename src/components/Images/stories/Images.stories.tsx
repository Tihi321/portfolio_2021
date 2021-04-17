import { Meta } from "@storybook/react";
import React from "react";

import netwokNodesImage from "~ts/images/network-nodes.svg";

import { FeaturedImage as FeaturedImageComponent } from "../FeaturedImage";

export const FeaturedImage = () => (
  <FeaturedImageComponent src={netwokNodesImage} alt="Network Nodes" />
);

const meta = {
  title: "Components/Images"
};

export default meta as Meta;

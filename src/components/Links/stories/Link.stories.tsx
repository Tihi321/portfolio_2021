import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { Link as LinkComponent, TLinkSizes } from "../Link";

export const Link = () => {
  const tagText = text("Link Text", "Node", "OPTIONS");

  const sizes = ["large", "medium", "regular", "small"];

  const linkSize = select("Size", sizes, sizes[2], "OPTIONS");

  return <LinkComponent size={linkSize as TLinkSizes} text={tagText} to="./" />;
};

const meta = {
  title: "Components/Link"
};

export default meta as Meta;

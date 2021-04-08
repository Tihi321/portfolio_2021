import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { ETextSizes, TTextSizes } from "../../Common/TextSize";
import { Link as LinkComponent } from "../Link";

export const Link = () => {
  const tagText = text("Link Text", "Node", "OPTIONS");

  const sizes = [
    ETextSizes.Large,
    ETextSizes.Medium,
    ETextSizes.Regular,
    ETextSizes.Small
  ];

  const linkSize = select("Size", sizes, sizes[2], "OPTIONS");

  return <LinkComponent size={linkSize as TTextSizes} text={tagText} to="./" />;
};

const meta = {
  title: "Components/Link"
};

export default meta as Meta;

import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { EFontSizes, TFontSizes } from "../../../styles";
import { Link as LinkComponent } from "../Link";

export const Link = () => {
  const tagText = text("Link Text", "Node", "OPTIONS");

  const sizes = [
    EFontSizes.Large,
    EFontSizes.Medium,
    EFontSizes.Regular,
    EFontSizes.Small
  ];

  const linkSize = select("Size", sizes, sizes[2], "OPTIONS");

  return <LinkComponent size={linkSize as TFontSizes} text={tagText} to="./" />;
};

const meta = {
  title: "Components/Link"
};

export default meta as Meta;

import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { EFontSizes, TFontSizes } from "../../Containers/FontSizeTheme";
import { Paragraph as ParagraphComponent } from "../Paragraph";

export const Paragraph = () => {
  const tagText = text("Text", "Vue Template Vars", "OPTIONS");

  const sizes = [
    EFontSizes.Large,
    EFontSizes.Medium,
    EFontSizes.Regular,
    EFontSizes.Small
  ];

  const linkSize = select("Size", sizes, sizes[2], "OPTIONS");

  return <ParagraphComponent size={linkSize as TFontSizes} text={tagText} />;
};

const meta = {
  title: "Components/Text"
};

export default meta as Meta;

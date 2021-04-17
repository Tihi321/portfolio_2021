import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { ETextSizes } from "~ts/enums";
import { TTextSizes } from "~ts/typings";

import { Paragraph as ParagraphComponent } from "../Paragraph";

export const Paragraph = () => {
  const tagText = text("Text", "Vue Template Vars", "OPTIONS");

  const sizes = [
    ETextSizes.Huge,
    ETextSizes.Large,
    ETextSizes.Medium,
    ETextSizes.Regular,
    ETextSizes.Small
  ];

  const linkSize = select("Size", sizes, sizes[3], "OPTIONS");

  return <ParagraphComponent size={linkSize as TTextSizes} text={tagText} />;
};

const meta = {
  title: "Components/Text"
};

export default meta as Meta;

import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { EHeadingSizes, THeadingSizes } from "../../Common/Heading";
import {
  FeaturedHeadingLink as FeaturedHeadingLinkComponent,
  HeadingLink as HeadingLinkComponent
} from "../HeadingLink";

export const HeadingLink = () => {
  const tagText = text("Tag Text", "Post title", "OPTIONS");

  const sizes = [
    EHeadingSizes.Large,
    EHeadingSizes.Medium,
    EHeadingSizes.Regular,
    EHeadingSizes.Small
  ];

  const headingSize = select("Size", sizes, sizes[2], "OPTIONS");

  return (
    <HeadingLinkComponent
      size={headingSize as THeadingSizes}
      text={tagText}
      to="./"
    />
  );
};

export const FeaturedHeadingLink = () => {
  const tagText = text("Tag Text", "Blog", "OPTIONS");

  return <FeaturedHeadingLinkComponent text={tagText} to="./" />;
};

const meta = {
  title: "Components/Link"
};

export default meta as Meta;

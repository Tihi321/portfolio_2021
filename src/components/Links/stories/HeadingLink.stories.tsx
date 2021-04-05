import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { THeadingSizes } from "../../Common/Heading";
import { HeadingLink as HeadingLinkComponent } from "../HeadingLink";

export const HeadingLink = () => {
  const tagText = text("Tag Text", "Post title", "OPTIONS");

  const sizes = ["large", "medium", "regular", "small"];

  const headingSize = select("Size", sizes, sizes[2], "OPTIONS");

  return (
    <HeadingLinkComponent
      size={headingSize as THeadingSizes}
      text={tagText}
      to="./"
    />
  );
};

const meta = {
  title: "Components/Link"
};

export default meta as Meta;

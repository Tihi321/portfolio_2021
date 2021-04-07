import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { FeaturedTagLink, TagLink } from "../TagLink";

export const Tag = () => {
  const tagText = text("Tag Text", "node", "OPTIONS");

  return (
    <TagLink
      text={tagText}
      to="./"
      active={boolean("Active", false, "OPTIONS")}
    />
  );
};

export const FeaturedTag = () => {
  const tagText = text("Tag Text", "node", "OPTIONS");

  return (
    <FeaturedTagLink
      text={tagText}
      to="./"
      active={boolean("Active", false, "OPTIONS")}
    />
  );
};

const meta = {
  title: "Components/Link"
};

export default meta as Meta;

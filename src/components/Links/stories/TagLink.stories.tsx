import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { FeaturedTagLink, TagLink } from "../TagLink";

export const Tag = () => {
  const tagText = text("Tag Text", "node", "OPTIONS");

  return <TagLink text={tagText} to="./" />;
};

export const FeaturedTag = () => {
  const tagText = text("Tag Text", "node", "OPTIONS");

  return <FeaturedTagLink text={tagText} to="./" />;
};

const meta = {
  title: "Components/Tags"
};

export default meta as Meta;

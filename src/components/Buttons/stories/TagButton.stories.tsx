import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import {
  FeaturedTagButton as FeaturedButton,
  TagButton as Button
} from "../TagButton";

export const TagButton = () => {
  const buttonText = text("Button Text", "node", "OPTIONS");

  return (
    <Button
      text={buttonText}
      onClick={action("onClick - Tag Button")}
      active={boolean("Active", false, "OPTIONS")}
    />
  );
};

export const FeaturedTagButton = () => {
  const buttonText = text("Button Text", "node", "OPTIONS");

  return (
    <FeaturedButton
      text={buttonText}
      onClick={action("onClick - Tag Button")}
      active={boolean("Active", false, "OPTIONS")}
    />
  );
};

const meta = {
  title: "Components/Buttons",
  component: Button
};

export default meta as Meta;

import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import {
  EFeaturedButtonType,
  FeaturedButton as Button
} from "../FeaturedButton";

export const FeaturedButton = () => {
  const buttonText = text("Button Text", "Dark", "OPTIONS");

  const types = [EFeaturedButtonType.Regular, EFeaturedButtonType.Wide];

  const buttonType = select("Size", types, types[2], "OPTIONS");

  return (
    <Button
      text={buttonText}
      type={buttonType}
      onClick={action("onClick - Featured Button")}
    />
  );
};

const meta = {
  title: "Components/Buttons",
  component: Button
};

export default meta as Meta;

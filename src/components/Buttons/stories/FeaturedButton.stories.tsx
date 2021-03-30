import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { FeaturedButton as Button } from "../FeaturedButton";

export const FeaturedButton = () => {
  const buttonText = text("Button Text", "Dark", "OPTIONS");

  return (
    <Button text={buttonText} onClick={action("onClick - Featured Button")} />
  );
};

const meta = {
  title: "Components/Buttons",
  component: Button
};

export default meta as Meta;

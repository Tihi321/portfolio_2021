import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { TagButton as Button } from "../TagButton";

export const TagButton = () => {
  const buttonText = text("Button Text", "node", "OPTIONS");

  return <Button text={buttonText} onClick={action("onClick - Tag Button")} />;
};

const meta = {
  title: "Components/Buttons",
  component: Button
};

export default meta as Meta;

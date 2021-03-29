import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from '@storybook/addon-knobs';
import React from "react";

import { FeaturedButton as Button } from "../FeaturedButton";
import { BackgroundContainer } from "../../Containers/BackgroundContainer";

export const FeaturedButton = () =>  {
  const buttonText = text("Button Text", "Dark", "OPTIONS");

 return <BackgroundContainer><Button text={buttonText} onClick={action("onClick - Featured Button")} /></BackgroundContainer>;
}

const meta = {
  title: "Components/Buttons",
  component: Button,
};

export default meta as Meta;
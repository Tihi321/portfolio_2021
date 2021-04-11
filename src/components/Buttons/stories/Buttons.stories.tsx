import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import {
  EFeaturedButtonType,
  FeaturedButton as FeaturedButtonComponent
} from "../FeaturedButton";
import {
  FeaturedTagButton as FeaturedTagButtonComponent,
  TagButton as TagButtonComponent
} from "../TagButton";
import { WideButton as WideButtonComponent } from "../WideButton";

export const FeaturedButton = () => {
  const buttonText = text("Button Text", "Dark", "OPTIONS");

  const types = [EFeaturedButtonType.Regular, EFeaturedButtonType.Wide];

  const buttonType = select("Size", types, types[2], "OPTIONS");

  return (
    <FeaturedButtonComponent
      type={buttonType}
      onClick={action("onClick - Featured Button")}
    >
      {buttonText}
    </FeaturedButtonComponent>
  );
};

export const TagButton = () => {
  const buttonText = text("Button Text", "node", "OPTIONS");

  return (
    <TagButtonComponent
      text={buttonText}
      onClick={action("onClick - Tag Button")}
      active={boolean("Active", false, "OPTIONS")}
    />
  );
};

export const FeaturedTagButton = () => {
  const buttonText = text("Button Text", "node", "OPTIONS");

  return (
    <FeaturedTagButtonComponent
      text={buttonText}
      onClick={action("onClick - Tag Button")}
      active={boolean("Active", false, "OPTIONS")}
    />
  );
};

export const WideButton = () => {
  const buttonText = text("Button Text", "node", "OPTIONS");

  return (
    <WideButtonComponent
      text={buttonText}
      onClick={action("onClick - Tag Button")}
    />
  );
};

const meta = {
  title: "Components/Buttons"
};

export default meta as Meta;

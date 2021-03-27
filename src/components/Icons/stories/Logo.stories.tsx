import { Meta } from "@storybook/react";
import { withKnobs, color, select, boolean  } from '@storybook/addon-knobs';
import React from "react";

import { Logo } from "../Logo";
import { BackgroundContainer } from "../../Containers/BackgroundContainer";

export const LogoComponent = () =>  {
  const ColorsId = 'COLORS';

  const themes = {
    Dark: {
      backgroundColor: "#333333",
      foregroundColor: "#FFFFFF"
    },
    Light: {
      backgroundColor: "#FFFFFF",
      foregroundColor: "#232739"
    }
  };

  const customColor = boolean("Custom", false, ColorsId);
  const theme = select("Theme", themes, themes.Dark, ColorsId);

  const backgroundColorKnob = color("Background Color", theme.backgroundColor, ColorsId);
  const foregroundColorKnob = color("Foreground Color", theme.foregroundColor, ColorsId);

  const backgroundColor = customColor ? backgroundColorKnob: theme.backgroundColor;
  const foregroundColor = customColor ? foregroundColorKnob: theme.foregroundColor;

 return <BackgroundContainer><Logo backgroundColor={backgroundColor} foregroundColor={foregroundColor} /></BackgroundContainer>;
}

const meta = {
  title: "Components/Icons",
  component: Logo,
  decorators: [withKnobs]
};

export default meta as Meta;
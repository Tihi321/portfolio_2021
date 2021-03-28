import { Meta } from "@storybook/react";
import React from "react";

import { Logo } from "../Logo";
import { BackgroundContainer } from "../../Containers/BackgroundContainer";

export const LogoComponent = () =>  {
 return <BackgroundContainer><Logo /></BackgroundContainer>;
}

const meta = {
  title: "Components/Icons",
  component: Logo,
};

export default meta as Meta;
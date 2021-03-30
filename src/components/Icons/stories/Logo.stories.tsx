import { Meta } from "@storybook/react";
import React from "react";

import { BackgroundContainer } from "../../Containers/BackgroundContainer";
import { Logo } from "../Logo";

export const LogoComponent = () => (
  <BackgroundContainer>
    <Logo />
  </BackgroundContainer>
);

const meta = {
  title: "Components/Icons",
  component: Logo
};

export default meta as Meta;

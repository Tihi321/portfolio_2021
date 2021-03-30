import { Meta } from "@storybook/react";
import React from "react";

import { LoremIpum as LoremIpumPage } from "../LoremIpsum";

export const LoremIpum = () => <LoremIpumPage />;

const meta = {
  title: "Tests/Page",
  component: LoremIpumPage
};

export default meta as Meta;

import { Meta } from "@storybook/react";
import React from "react";

import { JsFiddle as JsFiddleComponent } from "../JsFiddle";

export const JsFiddle = () => (
  <JsFiddleComponent fiddle="tfrq8ff3" tabs={["result", "js", "css"]} />
);
const meta = {
  title: "Blocks/JsFiddle"
};

export default meta as Meta;

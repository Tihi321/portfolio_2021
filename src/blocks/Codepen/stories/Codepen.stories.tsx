import { Meta } from "@storybook/react";
import React from "react";

import { Codepen as CodepenComponent } from "../Codepen";

export const Codepen = () => (
  <CodepenComponent tab="css" pen="rrKXwv" title="Background Loop" result />
);
const meta = {
  title: "Blocks/Codepen"
};

export default meta as Meta;

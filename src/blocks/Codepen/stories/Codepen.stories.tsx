import { Meta } from "@storybook/react";
import React from "react";

import { Codepen as CodepenComponent } from "../Codepen";

export const Codepen = () => (
  <CodepenComponent
    data-default-tab="css,result"
    data-slug-hash="rrKXwv"
    data-pen-title="Background Loop"
    style={{
      height: "265px",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center"
    }}
  >
    <span>
      See the Pen
      <a href="https://codepen.io/Tihi321/pen/rrKXwv">Background Loop</a> by
      Tihomir Selak (<a href="https://codepen.io/Tihi321">@Tihi321</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </span>
  </CodepenComponent>
);
const meta = {
  title: "Blocks/Codepen"
};

export default meta as Meta;

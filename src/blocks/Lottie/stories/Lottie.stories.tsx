import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import worldAnimation from "~ts/assets/world.json";

import { Lottie } from "../Lottie";

export const World = () => {
  const autoplay = boolean("Autoplay", true, "OPTIONS");
  const loop = boolean("Loop", false, "OPTIONS");
  const commands = boolean("Commands", false, "OPTIONS");
  const pause = boolean("Pause", false, "OPTIONS");

  return (
    <Lottie
      data={worldAnimation}
      commands={commands}
      pause={pause}
      autoplay={autoplay}
      loop={loop}
    />
  );
};

const meta = {
  title: "Blocks/Lottie"
};

export default meta as Meta;

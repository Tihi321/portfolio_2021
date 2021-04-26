import { boolean } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { Rive as RiveComponent } from "../Rive";

export const Rive = () => {
  const autoplay = boolean("Autoplay", true, "OPTIONS");
  const play = boolean("Play", false, "OPTIONS");
  const pause = boolean("Pause", false, "OPTIONS");
  const stop = boolean("Stop", false, "OPTIONS");

  return (
    <RiveComponent
      src="/magnifier.riv"
      play={play}
      pause={pause}
      stop={stop}
      autoplay={autoplay}
    />
  );
};

const meta = {
  title: "Blocks/Rive"
};

export default meta as Meta;

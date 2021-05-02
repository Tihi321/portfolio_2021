import { boolean, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { Youtube as YoutubeComponent } from "../Youtube";

export const Youtube = () => {
  const autoplay = boolean("Autoplay", false, "OPTIONS");
  const controls = boolean("Controls", false, "OPTIONS");
  const loop = boolean("Loop", false, "OPTIONS");
  const videoId = text("Video Id", "_KQ8aFCzSDI", "OPTIONS");

  return (
    <YoutubeComponent
      videoId={videoId}
      options={{
        autoplay,
        controls,
        loop
      }}
    />
  );
};

const meta = {
  title: "Blocks/Youtube"
};

export default meta as Meta;

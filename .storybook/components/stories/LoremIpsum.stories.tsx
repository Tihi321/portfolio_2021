import { Meta } from "@storybook/react";
import React from "react";

import { LoremIpum as LoremIpumPage } from "../LoremIpsum";
import { SamplePost } from "../SamplePost";

export const LoremIpum = () => <LoremIpumPage />;
export const Post = () => <SamplePost />;

const meta = {
  title: "Styles/Page"
};

export default meta as Meta;

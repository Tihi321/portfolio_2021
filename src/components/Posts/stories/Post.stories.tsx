/// <reference path="../../../definitions/modules/images/svg.d.ts" />
import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import netwokNodesImage from "../../../assets/images/network-nodes.svg";
import {
  EPostLinkSizes,
  FeaturedPostLink as FeaturedPostLinkComponent,
  PostLink as PostLinkComponent,
  TPostLinkSizes
} from "../PostLink";

export const PostLink = () => {
  const postTitleText = text("Post Title", "Post title text", "OPTIONS");

  const sizes = [EPostLinkSizes.Regular, EPostLinkSizes.Small];

  const headingSize = select("Size", sizes, sizes[1], "OPTIONS");

  return (
    <PostLinkComponent
      text={postTitleText}
      to="./"
      size={headingSize as TPostLinkSizes}
      tags={[
        { to: "./", text: "javascript" },
        { to: "./", text: "node" },
        { to: "./", text: "typescript" }
      ]}
    />
  );
};

export const FeaturedPostLink = () => {
  const postTitleText = text("Post Title", "Post title text", "OPTIONS");

  return (
    <FeaturedPostLinkComponent
      text={postTitleText}
      to="./"
      imageLink={netwokNodesImage}
      tags={[
        { to: "./", text: "javascript" },
        { to: "./", text: "node" },
        { to: "./", text: "typescript" }
      ]}
    />
  );
};

const meta = {
  title: "Components/Post"
};

export default meta as Meta;

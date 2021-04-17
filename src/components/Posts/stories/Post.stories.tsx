import { select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { EPostLinkSizes } from "~ts/enums";
import netwokNodesImage from "~ts/images/network-nodes.svg";
import { TPostLinkSizes } from "~ts/typings";

import { PostHeader as PostHeaderComponent } from "../PostHeader";
import {
  FeaturedPostLink as FeaturedPostLinkComponent,
  PostLink as PostLinkComponent
} from "../PostLink";

export const PostLink = () => {
  const postTitleText = text("Post Title", "Post title text", "OPTIONS");

  const sizes = [EPostLinkSizes.Regular, EPostLinkSizes.Small];

  const headingSize = select("Size", sizes, sizes[1], "OPTIONS");

  return (
    <PostLinkComponent
      readingTime="1min read"
      text={postTitleText}
      to="./"
      size={headingSize as TPostLinkSizes}
      tags={[
        { path: "./", name: "javascript" },
        { path: "./", name: "node" },
        { path: "./", name: "typescript" }
      ]}
    />
  );
};

export const FeaturedPostLink = () => {
  const postTitleText = text("Post Title", "Post title text", "OPTIONS");

  return (
    <FeaturedPostLinkComponent
      readingTime="1min read"
      text={postTitleText}
      to="./"
      imageLink={netwokNodesImage}
      tags={[
        { path: "./", name: "javascript" },
        { path: "./", name: "node" },
        { path: "./", name: "typescript" }
      ]}
    />
  );
};

export const PostHeader = () => {
  const postTitleText = text("Post Title", "Post title text", "OPTIONS");

  return (
    <PostHeaderComponent
      readingTime="1min read"
      title={postTitleText}
      imageLink={netwokNodesImage}
      tags={[
        { path: "./", name: "javascript" },
        { path: "./", name: "node" },
        { path: "./", name: "typescript" }
      ]}
    />
  );
};

const meta = {
  title: "Components/Post"
};

export default meta as Meta;

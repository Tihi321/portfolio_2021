import { boolean, select, text } from "@storybook/addon-knobs";
import { Meta } from "@storybook/react";
import React from "react";

import { EArrowLinkSides, EHeadingSizes, ETextSizes } from "~ts/enums";
import netwokNodesImage from "~ts/images/network-nodes.svg";
import { THeadingSizes, TTextSizes } from "~ts/typings";

import { ArrowLink as ArrowLinkComponent } from "../ArrowLink";
import {
  FeaturedHeadingLink as FeaturedHeadingLinkComponent,
  HeadingLink as HeadingLinkComponent
} from "../HeadingLink";
import { ImageLink as ImageLinkComponent } from "../ImageLink";
import { Link as LinkComponent } from "../Link";
import { FeaturedTagLink, TagLink } from "../TagLink";

export const Link = () => {
  const tagText = text("Link Text", "Node", "OPTIONS");

  const sizes = [
    ETextSizes.Large,
    ETextSizes.Medium,
    ETextSizes.Regular,
    ETextSizes.Small
  ];

  const linkSize = select("Size", sizes, sizes[2], "OPTIONS");

  return (
    <LinkComponent size={linkSize as TTextSizes} to="./">
      {tagText}
    </LinkComponent>
  );
};

export const HeadingLink = () => {
  const tagText = text("Tag Text", "Post title", "OPTIONS");

  const sizes = [
    EHeadingSizes.Large,
    EHeadingSizes.Medium,
    EHeadingSizes.Regular,
    EHeadingSizes.Small
  ];

  const headingSize = select("Size", sizes, sizes[2], "OPTIONS");

  return (
    <HeadingLinkComponent
      size={headingSize as THeadingSizes}
      text={tagText}
      to="./"
    />
  );
};

export const FeaturedHeadingLink = () => {
  const tagText = text("Tag Text", "Blog", "OPTIONS");

  return <FeaturedHeadingLinkComponent text={tagText} to="./" />;
};

export const ArrowLink = () => {
  const tagText = text("Link Text", "First post title", "OPTIONS");

  const sides = [EArrowLinkSides.Left, EArrowLinkSides.Right];

  const arrowSide = select("Side", sides, sides[0], "OPTIONS");

  return <ArrowLinkComponent text={tagText} to="./" side={arrowSide} />;
};

export const ImageLink = () => {
  const linkText = text("Link Text", "Post title", "OPTIONS");

  return <ImageLinkComponent src={netwokNodesImage} alt={linkText} to="./" />;
};

export const Tag = () => {
  const tagText = text("Tag Text", "node", "OPTIONS");

  return (
    <TagLink
      text={tagText}
      to="./"
      active={boolean("Active", false, "OPTIONS")}
    />
  );
};

export const FeaturedTag = () => {
  const tagText = text("Tag Text", "node", "OPTIONS");

  return (
    <FeaturedTagLink
      text={tagText}
      to="./"
      active={boolean("Active", false, "OPTIONS")}
    />
  );
};

const meta = {
  title: "Components/Links"
};

export default meta as Meta;

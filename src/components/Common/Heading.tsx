import React from "react";

import { IStyledProps } from "../../definitions";

export enum EHeadingSizes {
  Large = "large",
  Medium = "medium",
  Regular = "regular",
  Small = "small"
}

export type THeadingSizes =
  | EHeadingSizes.Large
  | EHeadingSizes.Medium
  | EHeadingSizes.Regular
  | EHeadingSizes.Small;

interface IHeadingProps extends IStyledProps {
  size: THeadingSizes;
  children: React.ReactNode;
}

const tags = {
  large: "h1",
  medium: "h2",
  regular: "h3",
  small: "h4"
};

export const Heading = ({ size, children, ...props }: IHeadingProps) =>
  React.createElement(tags[size] || tags.regular, props, children);

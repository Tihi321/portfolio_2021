import React from "react";

export type THeadingSizes = "large" | "medium" | "regular" | "small";

interface IHeadingProps {
  size: THeadingSizes;
  children: React.ReactNode;
  className?: string;
}

const tags = {
  large: "h1",
  medium: "h2",
  regular: "h3",
  small: "h4"
};

export const Heading = ({ size, children, ...props }: IHeadingProps) =>
  React.createElement(tags[size] || tags.regular, props, children);

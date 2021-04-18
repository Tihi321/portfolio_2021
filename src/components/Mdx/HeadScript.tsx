import React from "react";
import { Helmet } from "react-helmet";

interface IHeadScriptProps {
  src: string;
  type?: string;
}

export const HeadScript = ({ src, type = "javascript" }: IHeadScriptProps) => (
  <Helmet>
    {type === "javascript" ? (
      <script type="text/javascript" src={src} />
    ) : (
      <link rel="stylesheet" type="text/css" href={src} />
    )}
  </Helmet>
);

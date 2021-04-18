import React from "react";
import { Helmet } from "react-helmet";

interface IHeadScriptProps {
  src: string;
}

export const HeadScript = ({ src }: IHeadScriptProps) => (
  <Helmet>
    <script type="text/javascript" src={src} />
  </Helmet>
);

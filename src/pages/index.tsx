import { PageProps } from "gatsby";
import React from "react";

export default function IndexRoute(props: PageProps) {
  return (
    <>
      <h1>Path:</h1>
      <p>{props.path}</p>
    </>
  );
}

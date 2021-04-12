import { preToCodeBlock } from "mdx-utils";
import React from "react";

import { IContainerProps } from "../../definitions";
import { Code } from "./Code";

export const PreWrapper = (preProps: IContainerProps) => {
  const props = preToCodeBlock(preProps);

  // if there's a codeString and some props, we passed the test
  if (props) {
    return <Code {...props} />;
  }

  // it's possible to have a pre without a code in it
  return <pre {...preProps} />;
};

import React from "react";

import { MDXProvider, StyleLayout } from "./src/components/Layout";
import { ThemeContainer } from "./src/themes";

export const wrapRootElement = ({ element }) => (
  <MDXProvider>
    <ThemeContainer>{element}</ThemeContainer>
  </MDXProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <StyleLayout {...props}>{element}</StyleLayout>
);

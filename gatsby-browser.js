import React from "react";

import { MDXProvider, StyleLayout } from "./src/components/Layout";
import { Provider } from "./src/store";
import { ThemeContainer } from "./src/themes";

export const wrapRootElement = ({ element }) => (
  <MDXProvider>
    <Provider>
      <ThemeContainer>{element}</ThemeContainer>
    </Provider>
  </MDXProvider>
);

export const wrapPageElement = ({ element, props }) => (
  <StyleLayout {...props}>{element}</StyleLayout>
);

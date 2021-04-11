import React from "react";

import { StyleLayout } from "./src/components/Layout";
import { Provider } from "./src/store";
import { ThemeContainer } from "./src/themes";

export const wrapRootElement = ({ element }) => (
  <Provider>
    <ThemeContainer>{element}</ThemeContainer>
  </Provider>
);

export const wrapPageElement = ({ element, props }) => (
  <StyleLayout {...props}>{element}</StyleLayout>
);

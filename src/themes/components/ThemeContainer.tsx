import React from "react";
import { ThemeProvider } from "styled-components";

import { ETheme } from "~ts/enums";
import { getTheme, useSelector } from "~ts/store";
import { IContainerProps } from "~ts/typings";

import { darkTheme } from "../styles/dark";
import { lightTheme } from "../styles/light";

export const ThemeContainer = ({ children }: IContainerProps) => {
  const theme = useSelector(getTheme);
  const themeData = theme === ETheme.Dark ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeData}>{children}</ThemeProvider>;
};

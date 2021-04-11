import React from "react";
import { ThemeProvider } from "styled-components";

import { IContainerProps } from "../../definitions";
import { ETheme, getTheme, useSelector } from "../../store";
import { darkTheme, lightTheme } from "../index";

export const ThemeContainer = ({ children }: IContainerProps) => {
  const theme = useSelector(getTheme);
  const themeData = theme === ETheme.Dark ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeData}>{children}</ThemeProvider>;
};

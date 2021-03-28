import React from "react";
import { ThemeProvider } from "styled-components";

import { ETheme, getTheme, useSelector } from "../../store";
import { darkTheme, lightTheme } from "../index";

export interface ThemeContainerProps {
  children: React.ReactNode;
}

export const ThemeContainer = ({ children }: ThemeContainerProps) => {
  const theme = useSelector(getTheme);
  const themeData = theme === ETheme.Dark ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeData}>{children}</ThemeProvider>;
};

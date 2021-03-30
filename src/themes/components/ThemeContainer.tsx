import React from "react";
import { ThemeProvider } from "styled-components";

import { ETheme, getTheme, useSelector } from "../../store";
import { darkTheme, lightTheme } from "../index";

interface IThemeContainerProps {
  children: React.ReactNode;
}

export const ThemeContainer = ({ children }: IThemeContainerProps) => {
  const theme = useSelector(getTheme);
  const themeData = theme === ETheme.Dark ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeData}>{children}</ThemeProvider>;
};

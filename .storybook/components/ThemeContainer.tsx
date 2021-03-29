import React from "react";
import { ThemeProvider } from "styled-components";
import { select } from '@storybook/addon-knobs';
import { ETheme } from '../../src/store';
import { darkTheme, lightTheme } from "../../src/themes";

export interface ThemeContainerProps {
  children: React.ReactNode;
}

export const ThemeContainer = ({children}: ThemeContainerProps) => {
  const ColorsId = 'THEME OPTIONS';

  const themes = {
    Dark: ETheme.Dark,
    Light: ETheme.Light
  };

  const theme = select("Theme", themes, themes.Dark, ColorsId);
  const themeData = theme === ETheme.Dark ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeData}>{children}</ThemeProvider>;
}
import React, {useEffect} from "react";
import { select } from '@storybook/addon-knobs';
import { ETheme, useStore, setTheme } from '../../src/store';

export interface IThemeContainerProps {
  children: React.ReactNode;
}

export const ThemeSwitcher = ({children}: IThemeContainerProps) => {
  const ColorsId = 'THEME OPTIONS';

  const { dispatch } = useStore();

  const themes = {
    Dark: ETheme.Dark,
    Light: ETheme.Light
  };

  const theme = select("Theme", themes, themes.Dark, ColorsId);
  useEffect(() => dispatch(setTheme(theme)),[theme]);

  return <>{children}</>;
}
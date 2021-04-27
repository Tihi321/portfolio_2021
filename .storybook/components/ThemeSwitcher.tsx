import React, {useEffect, useMemo} from "react";
import { select } from '@storybook/addon-knobs';
import { useStore, setTheme } from '../../src/store';
import { ETheme } from '../../src/enums';

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

  const memoizedTheme = useMemo(() => theme, [theme]);
  useEffect(() => dispatch(setTheme(memoizedTheme)),[memoizedTheme]);

  return <>{children}</>;
}
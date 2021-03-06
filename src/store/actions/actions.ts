import { createAction } from "ts-use";

import { ETheme } from "~ts/enums";

import { EActionTypes } from "./types";

export const setTheme = (theme: ETheme) =>
  createAction(EActionTypes.ThemeSet, theme);

export const switchTheme = () => createAction(EActionTypes.ThemeSwitch);

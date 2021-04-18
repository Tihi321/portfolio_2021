import { ETheme } from "~ts/enums";

import { EActionTypes, TAction } from "../actions";
import { TState } from "../store";

export const initialState: TState = {
  theme: ETheme.Dark
};

export const reducer = (state: TState, { type, payload }: TAction) => {
  switch (type) {
    case EActionTypes.ThemeSet:
      return {
        ...state,
        theme: payload
      };
    case EActionTypes.ThemeSwitch:
      return {
        ...state,
        theme: state.theme === ETheme.Light ? ETheme.Dark : ETheme.Light
      };
    default:
      throw new Error();
  }
};

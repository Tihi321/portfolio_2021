import { EActionTypes, TAction } from "../actions";

export enum ETheme {
  Dark = "dark",
  Light = "light"
}

export type TState = {
  theme: ETheme;
};

export const initialState: TState = {
  theme: ETheme.Light
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

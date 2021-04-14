import React, { createContext, useContext, useReducer } from "react";

import { ETheme } from "~ts/enums";

import { initialState, reducer } from "./reducers";

export type TState = {
  theme: ETheme;
};

type TSelector = (state: TState) => any;

type TInitialState = {
  state: TState;
  dispatch: any;
};

const ContextInitialState: TInitialState = {
  state: initialState,
  dispatch: () => null
};

const StateContext = createContext(ContextInitialState);

interface IProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: IProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

const useStore = () => {
  const { state, dispatch } = useContext(StateContext);

  return { state, dispatch };
};

const useSelector = (selector: TSelector) => {
  const { state } = useStore();

  return selector(state);
};

export { useStore, Provider, useSelector };

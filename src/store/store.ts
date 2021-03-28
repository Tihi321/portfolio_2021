import { createReducerContext } from "react-use";

import { initialState, reducer, TState } from "./reducers";

type TSelector = (state: TState) => any;

const [useContextStore, Provider] = createReducerContext(reducer, initialState);

const useStore = () => {
  const [state, dispatch] = useContextStore();

  return { state, dispatch };
};

const useSelector = (selector: TSelector) => {
  const { state } = useStore();

  return selector(state);
};

export { useStore, Provider, useSelector };

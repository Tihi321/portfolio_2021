import { createReducerContext } from "react-use";

import { initialState, reducer, State } from "./reducers";

type Selector = (state: State) => any;

const [useContextStore, Provider] = createReducerContext(reducer, initialState);

const useStore = () => {
  const [state, dispatch] = useContextStore();

  return { state, dispatch };
};

const useSelector = (selector: Selector) => {
  const { state } = useStore();

  return selector(state);
};

export { useStore, Provider, useSelector };

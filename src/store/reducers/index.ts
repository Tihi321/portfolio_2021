import { Action, actionTypes } from "../actions";

export type State = {
  number: number;
};

export const initialState: State = {
  number: 0
};

export const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case actionTypes.Increment:
      return {
        ...state,
        number: state.number + 1
      };
    case actionTypes.Decrement:
      return {
        ...state,
        number: state.number - 1
      };
    default:
      throw new Error();
  }
};

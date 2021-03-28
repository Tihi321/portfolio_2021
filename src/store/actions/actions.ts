import { actionTypes } from "./types";

export const increment = () => ({
  type: actionTypes.Increment
});

export const decrement = () => ({
  type: actionTypes.Decrement
});

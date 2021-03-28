export enum actionTypes {
  Increment = "increment",
  Decrement = "decrement"
}

export type Action = {
  type: actionTypes;
  payload?: any;
};

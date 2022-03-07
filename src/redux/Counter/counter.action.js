import { INCREMENT, DECREMENT, SQUARE, SQUAREROOT } from "./counter.types";
export const Add = (data) => {
  return {
    type: INCREMENT,
    data: data
  };
};
export const Sub = (data) => {
  return {
    type: DECREMENT,
    data: data
  };
};
export const Square = (data) => {
  return {
    type: SQUARE,
    data: data
  };
};
export const SquareRoot = (data) => {
  return {
    type: SQUAREROOT,
    data: data
  };
};

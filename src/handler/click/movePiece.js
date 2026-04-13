import { boardState } from "../../Logic/boardState.js";

export const movePiece = (active, to) => {
  const from = active.index;
  boardState.get()[to] = active;
  boardState.get()[to].index = to;
  boardState.get()[from] = null;
};

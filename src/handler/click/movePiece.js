import { boardState } from "../../Logic/boardState.js";

export const movePiece = (active, to) => {
  const from = active.index;
  boardState[to] = active;
  boardState[to].index = to;
  boardState[from] = null;
};

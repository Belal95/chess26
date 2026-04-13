import { movePiece } from "./movePiece.js";

export const simulateMove = (boardState, from, to) => {
  const copyState = structuredClone(boardState);
  movePiece(copyState, from, to);
  return copyState;
};

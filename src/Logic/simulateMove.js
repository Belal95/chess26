import { movePiece } from "./movePiece.js";

export const simulateMove = (boardState, from, to) => {
  movePiece(boardState, from, to);
  return boardState;
};

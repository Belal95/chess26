import { boardState } from "./boardState.js";
import { checkedKing } from "./checkedKing.js";
import { simulateMove } from "./simulateMove.js";

export const filterLegalMoves = (from, moves, color) => {
  return moves.filter((to) => {
    const stateCopy = simulateMove(boardState.get(), from, to);
    return !checkedKing(color, stateCopy);
  });
};

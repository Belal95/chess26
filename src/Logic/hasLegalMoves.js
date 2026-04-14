import { checkedKing } from "./checkedKing.js";
import { getLegalMoves } from "./moves/index.js";

const hasLegalMoves = (color, boardState) => {
  const stateCopy = structuredClone(boardState);
  const pieces = stateCopy.filter((piece) => piece?.color === color);
  return pieces.some((piece) => getLegalMoves(piece, stateCopy).length > 0);
};

export const checkmate = (color, boardState) => {
  if (!hasLegalMoves(color, boardState)) {
    if (checkedKing(color, boardState)) return "checkmate";
    else return "stalemate";
  } else return false;
};

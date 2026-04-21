import { checkedKing } from "./checkedKing.js";
import { getLegalMoves } from "./moves/index.js";
/**
 * Search if a color has any legal moves or no
 * @param {String} color
 * @param {Array} boardState
 * @returns {Boolean}
 */

const hasLegalMoves = (color, boardState) => {
  const stateCopy = structuredClone(boardState);
  const pieces = stateCopy.filter((piece) => piece?.color === color);
  return pieces.some((piece) => getLegalMoves(piece, stateCopy).length > 0);
};
/**
 * Check if a color is checkmated, stalemated or neither
 * @param {String} color Piece color
 * @param {Array} boardState the state of the board
 * @returns {"checkmate"|"stalemate"|false} False or win condition
 */

export const checkmate = (color, boardState) => {
  if (!hasLegalMoves(color, boardState)) {
    if (checkedKing(color, boardState)) return "checkmate";
    else return "stalemate";
  } else return false;
};

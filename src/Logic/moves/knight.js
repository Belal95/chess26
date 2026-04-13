import { checkInBound, getIndex, getSquarePosition } from "../helpers.js";
import { direction } from "./direction.js";
/**
 * Get's legal moves for a knight in a board state
 * @param {Object} piece object holds the piece type,color and index in the state
 * @param {[Object]} boardState Holds the state of the board
 * @returns
 */
export function getKnightMoves(piece, boardState) {
  const moves = [];
  const { color, index } = piece;
  const { col, row } = getSquarePosition(index);

  direction.knight.forEach(([rowChange, colChange]) => {
    const targetCol = col + colChange;
    const targetRow = row + rowChange;
    const target = getIndex(targetCol, targetRow);
    const targeState = boardState[target];
    if (checkInBound(targetCol, targetRow) && targeState?.color !== color) {
      moves.push(target);
    }
  });
  return moves;
}

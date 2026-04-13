import { checkInBound, getIndex, getSquarePosition } from "../helpers.js";
/**
 * Get's legal moves for a sliding piece in a board state
 * @param {Object} piece object holds the piece type,color and index in the state
 * @param {[Object]} boardState Holds the state of the board
 * @returns
 */
export function getSlidingMoves(
  piece,
  boardState,
  direction,
  noRepeat = false,
) {
  const moves = [];
  const { color, index } = piece;
  const { col, row } = getSquarePosition(index);
  direction.forEach(([colChange, rowChange]) => {
    let inBound = true;
    let step = 1;
    while (inBound) {
      const targetCol = col + colChange * step;
      const targetRow = row + rowChange * step;
      const target = getIndex(targetCol, targetRow);
      const targeState = boardState[target];

      if (checkInBound(targetCol, targetRow)) {
        if (targeState === null) moves.push(target);
        else if (targeState?.color !== color) {
          moves.push(target);
          break;
        } else if (targeState?.color === color) break;
      } else inBound = false;
      if (noRepeat) inBound = false;
      step++;
    }
  });
  return moves;
}

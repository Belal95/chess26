import { checkInBound, getIndex, getSquarePosition } from "../helpers.js";
import { direction } from "./direction.js";

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

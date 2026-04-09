import { getSquarePosition } from "../helpers.js";

export function getPawnMoves(piece, boardState) {
  const moves = [];
  const { color, index } = piece;
  const { col, row } = getSquarePosition(index);
  const firstRow = color === "white" ? 7 : 2;
  const direction = color === "white" ? -8 : 8;
  //first move
  let target = index + direction;
  let targetState = boardState[target];
  if (!targetState) {
    // Move
    moves.push(target);
    target = index + direction * 2;
    targetState = boardState[target];
    // First move
    if (row === firstRow && !targetState) moves.push(target);
  }
  //capture left or right
  target = index + direction - 1;
  targetState = boardState[target]?.color;
  if (targetState !== color && !!targetState && col !== 1) moves.push(target);
  //capture right or left
  target = index + direction + 1;
  targetState = boardState[target]?.color;
  if (targetState !== color && !!targetState && col !== 8) moves.push(target);
  return moves;
}

import { direction } from "./direction.js";
import { getSlidingMoves } from "./sliding.js";

export function getRookMoves(piece, boardState) {
  return getSlidingMoves(piece, boardState, direction.rook);
}

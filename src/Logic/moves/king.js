import { direction } from "./direction.js";
import { getSlidingMoves } from "./sliding.js";

export function getKingMoves(piece, boardState) {
  return getSlidingMoves(piece, boardState, direction.king);
}

import { direction } from "./direction.js";
import { getSlidingMoves } from "./sliding.js";

export function getBishopMoves(piece, boardState) {
  return getSlidingMoves(piece, boardState, direction.bishop);
}

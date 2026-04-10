import { direction } from "./direction.js";
import { getSlidingMoves } from "./sliding.js";

export function getQueenMoves(piece, boardState) {
  return getSlidingMoves(piece, boardState, direction.queen);
}

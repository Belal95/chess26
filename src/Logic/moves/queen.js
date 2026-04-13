import { direction } from "./direction.js";
import { getSlidingMoves } from "./sliding.js";

/**
 * Get's legal moves for a queen in a board state
 * @param {Object} piece object holds the piece type,color and index in the state
 * @param {[Object]} boardState Holds the state of the board
 * @returns
 */
export function getQueenMoves(piece, boardState) {
  return getSlidingMoves(piece, boardState, direction.queen);
}

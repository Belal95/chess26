/**
 *   @import {Piece} from "../../types.js"
 */

import { direction } from "./direction.js";
import { getSlidingMoves } from "./sliding.js";

/**
 * Get's legal moves for a rook in a board state
 * @param {Piece} piece object holds the piece type,color and index in the state
 * @param {(Piece|Null)[]} boardState Holds the state of the board
 * @returns
 */
export function getRookMoves(piece, boardState) {
  return getSlidingMoves(piece, boardState, direction.rook);
}

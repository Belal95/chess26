/**
 *   @import {Piece} from "../types.js"
 */

import { movePiece } from "./movePiece.js";
/**
 * Simulate a move on a copy of the sent boardState
 * @param {Piece[]} boardState
 * @param {Number} from
 * @param {Number} to
 * @returns
 */
export const simulateMove = (boardState, from, to) => {
  const copyState = structuredClone(boardState);
  movePiece(copyState, from, to);
  return copyState;
};

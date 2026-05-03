/**
 *   @import {Piece} from "../types.js"
 */

import { getSquarePosition } from "./helpers.js";
/**
 *
 * @param {Piece[]} boardState Board State to check
 * @returns {Array} Array of all pawns in Board State
 */
const getPawns = (boardState) =>
  boardState.filter((piece) => piece?.type === "pawn");

/**
 * Return true if the pawn can promote and false otherwise
 * @param {Piece} pawn pawn to check if waiting promotion
 * @returns
 */
const canPawnPromote = (pawn) => {
  const { row } = getSquarePosition(pawn.index);
  const promotionRow = pawn.color === "black" ? 8 : 1;
  return row === promotionRow;
};
/**
 * Return the pawn to promote
 * @param {Piece[]} boardState Board State to check
 * @returns {Piece|Null}Pawn waiting promotion
 */
export const getPromotablePawn = (boardState) =>
  getPawns(boardState).filter((pawn) => canPawnPromote(pawn))[0] || null;

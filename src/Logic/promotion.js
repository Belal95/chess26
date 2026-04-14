import { getSquarePosition } from "./helpers.js";
/**
 * Return the pawn to promote
 * @param {[{}]} boardState Board State to check
 * @returns Pawn waiting promotion
 */
export const getPromotablePawn = (boardState) =>
  getPawns(boardState).filter((pawn) => canPawnPromote(pawn))[0] || null;
/**
 *
 * @param {[{}]} boardState Board State to check
 * @returns {Array} Array of all pawns in Board State
 */
const getPawns = (boardState) =>
  boardState.filter((piece) => piece?.type === "pawn");
/**
 * Return true if the pawn can promote and false otherwise
 * @param {Object} pawn pawn to check if waiting promotion
 * @returns True | False
 */
const canPawnPromote = (pawn) => {
  const { row } = getSquarePosition(pawn.index);
  const promotionRow = pawn.color === "black" ? 8 : 1;
  return row === promotionRow;
};

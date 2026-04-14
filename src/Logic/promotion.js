import { getSquarePosition } from "./helpers.js";

export const getPromotablePawn = (boardState) =>
  getPawns(boardState).filter((pawn) => canPawnPromote(pawn))[0] || null;
/**
 *
 * @param {*} color
 * @param {*} boardState
 * @returns {Array}
 */
const getPawns = (boardState) =>
  boardState.filter((piece) => piece.type === "pawn");

const canPawnPromote = (pawn) => {
  const { row } = getSquarePosition(pawn.index);
  const black = pawn.color === "black" ? 7 : 0;
  if (row === 1 + black) return true;
  else return false;
};

import { filterLegalMoves } from "../filterLegalMoves.js";
import { getBishopMoves } from "./bishop.js";
import { getKingMoves } from "./king.js";
import { getKnightMoves } from "./knight.js";
import { getPawnMoves } from "./pawn.js";
import { getQueenMoves } from "./queen.js";
import { getRookMoves } from "./rook.js";

/**
 * Get's legal moves for a piece in a board state
 * @param {Object} piece object holds the piece type,color and index in the state
 * @param {[Object]} boardState Holds the state of the board
 * @returns
 */
export function getRawMoves(piece, boardState) {
  const { type } = piece;
  switch (type) {
    case "pawn":
      return getPawnMoves(piece, boardState);
    case "bishop":
      return getBishopMoves(piece, boardState);
    case "knight":
      return getKnightMoves(piece, boardState);
    case "rook":
      return getRookMoves(piece, boardState);
    case "king":
      return getKingMoves(piece, boardState);
    case "queen":
      return getQueenMoves(piece, boardState);
    default:
  }
}

export function getLegalMoves(piece, boardState) {
  const rawMoves = getRawMoves(piece, boardState);
  return filterLegalMoves(piece.index, rawMoves, piece.color);
}

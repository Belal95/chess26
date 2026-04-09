import { getBishopMoves } from "./bishop.js";
import { getKingMoves } from "./king.js";
import { getKnightMoves } from "./knight.js";
import { getPawnMoves } from "./pawn.js";
import { getQueenMoves } from "./queen.js";
import { getRookMoves } from "./rook.js";

export function getLegalMoves(piece, boardState) {
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

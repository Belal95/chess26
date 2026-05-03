import { game } from "../gameState.js";
import { getSquarePosition } from "../helpers.js";

/**
 *   @import {Piece} from "../../types.js"
 */

/**
 *
 * @param {Piece} piece object holds the piece type,color and index in the state
 */
function isEnPassant(piece) {
  const enPassantRow = piece.color === "white" ? 4 : 5;

  const isEnPassantRow = getSquarePosition(piece.index).row === enPassantRow;
  const lastMove = game.getLastMove();
  if (!lastMove) return false;
  const isPawn = lastMove?.piece.type === "pawn";
  const { row: from } = getSquarePosition(lastMove?.from);
  const { row: to } = getSquarePosition(lastMove.to);
  const isFirstMove = Math.abs(from - to) === 2;
  const isBesideSquare =
    lastMove.to === piece.index - 1 || lastMove.to === piece.index + 1;
  return isEnPassantRow && isPawn && isFirstMove && isBesideSquare;
}

/**
 *
 * @param {Piece} piece object holds the piece type,color and index in the state
 */
export function getEnPassantMoves(piece) {
  if (isEnPassant(piece)) {
    const direction = piece.color === "white" ? -8 : 8;
    const targetSquare = game.getLastMove().to + direction;
    return [targetSquare];
  } else return [];
}

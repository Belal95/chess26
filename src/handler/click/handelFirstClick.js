import { game } from "../../Logic/gameState.js";
import { selection } from "./selection.js";
/**
 * Handle the first click interaction on a board
 * @param {*} clickedPiece
 */
export function handleFirstClick(clickedPiece) {
  const pieceColor = clickedPiece?.color;
  const turn = game.getPlayerTurn();

  // If a piece is not selected
  if (pieceColor === turn) {
    // Clicked Own Piece
    selection.select(clickedPiece);
  } else {
    // Clicked enemy or empty piece
  }
}

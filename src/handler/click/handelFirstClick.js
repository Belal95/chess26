/**
 *   @import {Piece} from "../../types.js"
 */

import { game } from "../../Logic/gameState.js";
import { selection } from "./selection.js";
/**
 * Handle the first click interaction on a board
 * @param {Piece[]} clickedSquare
 */
export function handleFirstClick(clickedSquare) {
  const pieceColor = clickedSquare?.color;
  const turn = game.getPlayerTurn();

  // If a piece is not selected
  if (pieceColor === turn) {
    // Clicked Own Piece
    selection.select(clickedSquare);
  } else {
    // Clicked enemy or empty piece
  }
}

/**
 *   @import {Piece,BoardState} from "../../types.js"
 */

import { game } from "../../Logic/gameState.js";
import { getLegalMoves } from "../../Logic/moves/index.js";
import { UI } from "../../UI/UI.js";
import { boardState } from "../../Logic/boardState.js";

/**
 * Select a piece in the game state and the UI
 * @param {Piece} piece
 * @param {BoardState} state
 */
const select = (piece, state = boardState.get()) => {
  const moves = getLegalMoves(piece, state);
  UI.select(piece, moves);
  game.select(piece, moves);
};
/**
 * Deselect a piece from the state and the UI
 * @param {Piece} piece
 */
const deselect = (piece) => {
  const moves = game.getActiveLegalMoves();
  UI.deselect(piece, moves);
  game.deselect();
};

export const selection = { select, deselect };

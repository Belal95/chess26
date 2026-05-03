import { game } from "../../Logic/gameState.js";
import { gameOver } from "../../UI/gameOver.js";
import { render } from "../../UI/render.js";
import { selection } from "./selection.js";
import { getPromotablePawn } from "../../Logic/getPromotablePawn.js";
import { showPromotionModal } from "../../UI/promotionModal.js";
import { checkmate } from "../../Logic/hasLegalMoves.js";
import { movePiece } from "../../Logic/movePiece.js";
import { boardState } from "../../Logic/boardState.js";
const { select, deselect } = selection;

/**
 * Check if there is a promotable pawn and promote it.
 */
export const promoting = () => {
  const promotablePawn = getPromotablePawn(boardState.get());
  if (!!promotablePawn) {
    game.setPendingPromotion(promotablePawn);
    const turn = game.getPlayerTurn();
    showPromotionModal(turn, (piece) => {
      promotablePawn.type = piece;
      game.setPendingPromotion(null);
      render();
      afterMove();
    });
    return true;
  } else return false;
};

/**
 * Check about checkmates, stalemates or draws and end the game if any was found
 */
const handleWinConditions = () => {
  const turn = game.getPlayerTurn();
  const isCheckMate = checkmate(turn, boardState.get());
  if (!!isCheckMate) gameOver(isCheckMate, turn);
};
/**
 * Move the currently selected piece to a an index index
 * @param {Number} to the index to move to
 *
 */
const moveActivePiece = (to) => {
  // Get Selected Piece
  const active = game.getActive();
  // Get Selected Piece current position
  const from = active?.index;
  deselect(active);
  movePiece(boardState.get(), from, to);
};

/**
 * Handel after move logic
 */
const afterMove = () => {
  game.switchTurn();
  handleWinConditions();
};
/**
 * Handel Move Logic
 * @param {Number} to the index to move to
 */
const move = (to) => {
  moveActivePiece(to);
  render();
  if (!promoting()) afterMove(); // Either Handel Promotion or finalize the move
};
/**
 * Check the if the a move is present in the selected piece legal move array
 * @param {Number} index index to move to
 * @returns True if valid
 */
const validMove = (index) => game.getActiveLegalMoves().includes(index);
/**
 * Handel the second click interaction on a board
 * @param {*} active
 * @param {*} clickedPiece
 * @param {*} index
 */

export function handleSecondClick(active, clickedPiece, index) {
  const pieceColor = clickedPiece?.color;
  const turn = game.getPlayerTurn();

  // If a piece was selected
  if (active?.index === clickedPiece?.index) {
    // Clicked Same Piece
    deselect(active);
  } else if (pieceColor === turn) {
    // Clicked different own piece
    deselect(active);
    select(clickedPiece);
  } else if (validMove(index)) {
    move(index);
    // Clicked on a valid square to move
  } else {
    // Clicked on an invalid square
    deselect(active);
  }
}

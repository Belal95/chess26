import { boardState } from "../../Logic/boardState.js";
import { render } from "../../UI/render.js";
import { game } from "../../Logic/gameState.js";
import { selection } from "./selection.js";
import { movePiece } from "../../Logic/movePiece.js";
import { checkmate } from "../../Logic/hasLegalMoves.js";
import { gameOver } from "../../UI/gameOver.js";
import { getPromotablePawn } from "../../Logic/getPromotablePawn.js";
import { showPromotionModal } from "../../UI/promotionModal.js";
const { select, deselect } = selection;

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
 * Check if there is a promotable pawn and promote it.
 */
const promoting = () => {
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
 * Handel the first click interaction on a board
 * @param {*} clickedPiece
 */
function handleFirstClick(clickedPiece) {
  const pieceColor = clickedPiece?.color;
  const turn = game.getPlayerTurn();

  // If a piece is not selected
  if (pieceColor === turn) {
    // Clicked Own Piece
    select(clickedPiece);
  } else {
    // Clicked enemy or empty piece
  }
}
/**
 * Handel the second click interaction on a board
 * @param {*} active
 * @param {*} clickedPiece
 * @param {*} index
 */
function handleSecondClick(active, clickedPiece, index) {
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
/**
 * Handel any click interaction on the board
 * @param {*} e
 */
export function handleClick(e) {
  if (!!game.getPendingPromotion()) {
    return;
  } else {
    const index = Number(e.target.closest(".square").getAttribute("index"));
    const clickedPiece = boardState.get()[index];
    const active = game.getActive();
    if (active === null) handleFirstClick(clickedPiece);
    else handleSecondClick(active, clickedPiece, index);
  }
}

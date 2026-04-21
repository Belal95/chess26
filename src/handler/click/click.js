import { boardState } from "../../Logic/boardState.js";
import { render } from "../../UI/render.js";
import { game } from "../../Logic/gameState.js";
import { selection } from "./selection.js";
import { movePiece } from "../../Logic/movePiece.js";
import { checkmate } from "../../Logic/hasLegalMoves.js";
import { gameOver } from "../../UI/gameOver.js";
const { select, deselect } = selection;

/**
 * Move the currently selected piece to a an index index
 * @param {Number} to the index to move to
 *
 */
const move = (to) => {
  // Get Selected Piece
  const active = game.getActive();
  // Get Selected Piece current position
  const from = active?.index;
  deselect(active);
  movePiece(boardState.get(), from, to);
  render();
  game.switchTurn();
  const turn = game.isWhite() ? "white" : "black";
  const isCheckMate = checkmate(turn, boardState.get());
  if (!!isCheckMate) gameOver(isCheckMate, turn);
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
  const turn = game.isWhite() ? "white" : "black";

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
  const turn = game.isWhite() ? "white" : "black";

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
  const index = Number(e.target.closest(".square").getAttribute("index"));
  const clickedPiece = boardState.get()[index];
  const active = game.getActive();
  if (active === null) handleFirstClick(clickedPiece);
  else handleSecondClick(active, clickedPiece, index);
}

import { boardState } from "../../Logic/boardState.js";
import { render } from "../../UI/render.js";
import { game } from "../../Logic/gameState.js";
import { selection } from "./selection.js";
import { movePiece } from "./movePiece.js";
//Click section
const { select, deselect } = selection;
const move = (to) => {
  const active = game.getActive();
  deselect(active);
  movePiece(active, to);
  render();
  game.switchTurn();
};

const validMove = (index) => game.getActiveLegalMoves().includes(index);
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
export function handleClick(e) {
  const index = Number(e.target.closest(".square").getAttribute("index"));
  const clickedPiece = boardState.get()[index];
  const active = game.getActive();
  if (active === null) handleFirstClick(clickedPiece);
  else handleSecondClick(active, clickedPiece, index);
}

import { boardState } from "../Logic/boardState.js";
import { getLegalMoves } from "../Logic/moves/index.js";
import { square } from "./square.js";
import { render } from "./render.js";

//Click section
let selectedPiece = null;
let turn = "white";
let moveList = [];
const deselect = (piece) => {
  if (piece) square.removeClass(piece?.index, "selected");
  moveList.forEach((i) => {
    square.removeClass(i, "validMove");
  });
  selectedPiece = null;
};
const select = (piece) => {
  if (piece) square.addClass(piece?.index, "selected");
  const moves = getLegalMoves(piece, boardState);
  moves.forEach((i) => {
    square.addClass(i, "validMove");
  });
  selectedPiece = piece;
  moveList = moves;
};
const move = (index) => {
  boardState[index] = selectedPiece;
  const i = selectedPiece.index;
  deselect(selectedPiece);
  boardState[index].index = index;
  boardState[i] = null;
  render();
  turn = turn === "white" ? "black" : "white";
};
const validMove = (index) => moveList.includes(index);
export function handleClick(e) {
  /**
   * @type {HTMLElement} The current square clicked by the user
   */
  const index = Number(e.target.closest(".square").getAttribute("index"));
  const clickedPiece = boardState[index];
  const pieceColor = clickedPiece?.color;
  if (selectedPiece === null) {
    // If a piece is not selected
    if (pieceColor === turn) {
      // Clicked Own Piece
      select(clickedPiece);
    } else {
      // Clicked enemy or empty piece
    }
  } else {
    // If a piece was selected
    if (selectedPiece === clickedPiece) {
      // Clicked Same Piece
      deselect(selectedPiece);
    } else if (pieceColor === turn) {
      // Clicked different own piece
      deselect(selectedPiece);
      select(clickedPiece);
    } else if (validMove(index)) {
      move(index);
      // Clicked on a valid square to move
    } else {
      // Clicked on an invalid square
      deselect(selectedPiece);
    }
  }
}

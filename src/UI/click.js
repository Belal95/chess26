import { boardState } from "../Logic/boardState.js";
import { square } from "./square.js";

//Click section
let selectedPiece = "";
let turn = "white";
const deselect = (piece) => {
  square.removeClass(piece?.index, "selected");
  selectedPiece = "";
};
const select = (piece) => {
  square.addClass(piece?.index, "selected");
  selectedPiece = piece;
};
const move = () => {};
const validMove = () => {};
export function handleClick(e) {
  /**
   * @type {HTMLElement} The current square clicked by the user
   */
  const index = Number(e.target.closest(".square").getAttribute("index"));
  const clickedPiece = boardState[index];
  const pieceColor = clickedPiece?.color;
  if (selectedPiece === "") {
    // If a piece is not selected
    if (pieceColor === turn) {
      // Clicked Own Piece
      console.log("clicked square is own");
      select(clickedPiece);
    } else {
      // Clicked enemy or empty piece
    }
  } else {
    // If a piece was selected
    if (selectedPiece == clickedPiece) {
      // Clicked Same Piece
      deselect(selectedPiece);
    } else if (pieceColor === turn) {
      // Clicked different own piece
      deselect(selectedPiece);
      select(clickedPiece);
    } else if (validMove()) {
      // Clicked on a valid square to move
      move();
    } else {
      // Clicked on an invalid square
      deselect(selectedPiece);
    }
  }
}

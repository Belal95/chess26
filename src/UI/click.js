import { boardState } from "../Logic/boardState.js";
import { getLegalMoves } from "../Logic/moves/index.js";
import { square } from "./square.js";
import { render } from "./render.js";
import { game } from "../Logic/gameState.js";
//Click section
const deselect = (piece) => {
  if (piece) square.removeClass(piece?.index, "selected");
  const moveList = game.getActiveLegalMoves();
  moveList.forEach((i) => {
    square.removeClass(i, "validMove");
  });
  game.setActive(null);
};
const select = (piece) => {
  if (piece) square.addClass(piece?.index, "selected");
  const moves = getLegalMoves(piece, boardState);
  moves.forEach((i) => {
    square.addClass(i, "validMove");
  });
  game.setActive(piece);
  game.setActiveLegalMoves(moves);
};
const move = (index) => {
  const active = game.getActive();
  const i = active.index;
  boardState[index] = active;
  deselect(active);
  boardState[index].index = index;
  boardState[i] = null;
  render();
  game.switchTurn();
};
const validMove = (index) => game.getActiveLegalMoves().includes(index);
export function handleClick(e) {
  const turn = game.isWhite() === true ? "white" : "black";
  /**
   * @type {HTMLElement} The current square clicked by the user
   */
  const index = Number(e.target.closest(".square").getAttribute("index"));
  const clickedPiece = boardState[index];
  const pieceColor = clickedPiece?.color;
  const active = game.getActive();
  if (active === null) {
    // If a piece is not selected
    if (pieceColor === turn) {
      // Clicked Own Piece
      select(clickedPiece);
    } else {
      // Clicked enemy or empty piece
    }
  } else {
    // If a piece was selected
    if (active === clickedPiece) {
      // Clicked Same Piece
      deselect(active);
    } else if (pieceColor === turn) {
      // Clicked different own piece
      deselect(active);
      select(clickedPiece);
    } else if (validMove(index)) {
      console.log(index);

      move(index);
      // Clicked on a valid square to move
    } else {
      // Clicked on an invalid square
      deselect(active);
    }
  }
}

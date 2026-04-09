import { square } from "./square.js";

/**
 * Create the chess Board
 * Takes an empty element and creates make it the board
 * @param {HTMLDivElement} board - The element with id board
 */
export function createBoard(board) {
  for (let i = 0; i < 64; i++) {
    const Square = square.create(i);
    board.appendChild(Square);
  }
}

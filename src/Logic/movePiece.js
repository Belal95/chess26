/**
 *   @import {Piece} from "../types.js"
 */
import { game } from "./gameState.js";
import { getIndex, getSquarePosition } from "./helpers.js";

/**
 * Handle pawn removal if it was a castling move
 * @param {Piece[]} boardState the current board state
 * @param {Number} from index to move from
 * @param {Number} to index to move
 */
function handelEnPassant(boardState, from, to) {
  if (
    boardState[from].type === "pawn" &&
    (Math.abs(from - to) === 7 || Math.abs(from - to === 9)) &&
    boardState[to] === null
  ) {
    const direction = boardState[from].color === "white" ? 8 : -8;
    boardState[to + direction] = null;
  }
}

/**
 * Handle rook move if it was a castling move
 * @param {Piece[]} boardState the current board state
 * @param {Number} from index to move from
 * @param {Number} to index to move
 */
function handleCastling(boardState, from, to) {
  const isCastling =
    boardState[to].type === "king" && Math.abs(to - from) === 2;
  if ("hasMoved" in boardState[to]) {
    if (isCastling) {
      const direction = to - from > 0 ? 1 : -1;
      const { row } = getSquarePosition(from);
      const rookFrom = direction === 1 ? getIndex(8, row) : getIndex(1, row);
      const rookTo = from + direction;
      movePiece(boardState, rookFrom, rookTo, false);
    }
    boardState[to].hasMoved = true;
  }
}
/**
 * Move a piece from an index to an other index using just the indexes
 *
 * @param {Piece[]} boardState the current board state
 * @param {Number} from index to move from
 * @param {Number} to index to move to
 * @param {Boolean} recordMove Optional to not record the current move
 */
export const movePiece = (boardState, from, to, recordMove = true) => {
  if (recordMove) game.addMove({ piece: { ...boardState[from] }, to, from });
  handelEnPassant(boardState, from, to);
  boardState[to] = boardState[from];
  boardState[to].index = to;
  handleCastling(boardState, from, to);
  boardState[from] = null;
};

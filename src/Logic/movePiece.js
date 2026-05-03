import { getIndex, getSquarePosition } from "./helpers.js";
/**
 * Handle castling move
 * @param {[{color,type,index,hasMoved}]} boardState the current board state
 * @param {Number} from index to move from
 * @param {Number} to index to move
 */
function handleCastling(boardState, from, to) {
  const direction = to - from > 0 ? 1 : -1;
  const { row } = getSquarePosition(from);
  const rookFrom = direction === 1 ? getIndex(8, row) : getIndex(1, row);
  const rookTo = from + direction;
  movePiece(boardState, rookFrom, rookTo);
}
/**
 * Move a piece from an index to an other index using just the indexes
 *
 * @param {[{color,type,index,hasMoved}]} boardState the current board state
 * @param {Number} from index to move from
 * @param {Number} to index to move
 */
export const movePiece = (boardState, from, to) => {
  boardState[to] = boardState[from];
  boardState[to].index = to;
  const isCastling =
    boardState[to].type === "king" && Math.abs(to - from) === 2;
  if ("hasMoved" in boardState[to]) {
    if (isCastling) handleCastling(boardState, from, to);
    boardState[to].hasMoved = true;
  }
  boardState[from] = null;
};

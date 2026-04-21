/**
 * Move a piece from an index to an other index using just the indexes
 *
 * @param {[Object]} boardState the current board state
 * @param {Number} from index to move from
 * @param {Number} to index to move
 */
export const movePiece = (boardState, from, to) => {
  boardState[to] = boardState[from];
  boardState[to].index = to;
  boardState[from] = null;
};

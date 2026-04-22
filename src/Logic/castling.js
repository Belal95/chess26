/**
 * Get valid castling moves
 * @param {*} king
 * @param {[{color,type,index,hasMoved}]} boardState
 */
export function getCastlingMoves(king, boardState) {
  const { color } = king;
  boardState.filter(
    (piece) =>
      piece.type === "rook" &&
      piece.color === color &&
      piece.hasMoved === false,
  );
}

import { checkedKing } from "./checkedKing.js";
import { squaresBetween } from "./helpers.js";
import { simulateMove } from "./simulateMove.js";
/**
 * Get valid castling moves
 * @param {{color,type,index,hasMoved}} king
 * @param {[{color,type,index,hasMoved}]} boardState
 */
const getCastlingRooks = (king, boardState) =>
  boardState.filter(
    (piece) =>
      piece?.type === "rook" &&
      piece?.color === king.color &&
      piece?.hasMoved === false,
  );
/**
 * Get valid castling moves
 * @param {{color,type,index,hasMoved}} king
 * @param {[{color,type,index,hasMoved}]} boardState
 */
export function getCastlingMoves(king, boardState) {
  const moves = [];
  if (king.hasMoved === true) return [];
  const rooks = getCastlingRooks(king, boardState);
  rooks.forEach((rook) => {
    const emptyPath = squaresBetween(king.index, rook.index).every(
      (i) => boardState[i] === null,
    );
    if (emptyPath) {
      const direction = rook.index < king.index ? -1 : 1;
      const safe = ![0, 1, 2].some((i) =>
        checkedKing(
          king.color,
          simulateMove(boardState, king.index, king.index + i * direction),
        ),
      );
      if (safe) moves.push(king.index + direction * 2);
    }
  });
  return moves;
}

import { getRawMoves } from "./moves/index.js";

export const checkedKing = (color, boardState) => {
  const king = boardState.find(
    (piece) => piece?.type === "king" && piece?.color === color,
  );
  const enemyColor = color === "white" ? "black" : "white";
  const enemyPieces = boardState.filter((piece) => piece?.color === enemyColor);
  if (!king) return false;
  return enemyPieces.some((piece) =>
    getRawMoves(piece, boardState).includes(king.index),
  );
};

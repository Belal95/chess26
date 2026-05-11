import { boardState } from "./boardState.js";
import { checkedKing } from "./checkedKing.js";
import { checkmate } from "./hasLegalMoves.js";
import { getSquarePosition } from "./helpers.js";

/**
 * @import {Move} from "../types.js"
 */
const pieceNotation = {
  king: "K",
  queen: "Q",
  rook: "R",
  bishop: "B",
  knight: "N",
  pawn: "",
};
const colNotation = ["a", "b", "c", "d", "e", "f", "g", "h"];
const getPieceNotation = (type) => pieceNotation[type];
const getRowNotation = (row) => Math.abs(9 - row);
const getColNotation = (col) => colNotation[col - 1];
/**
 * Get the notation for the current move
 * @param {Move} move
 */
export const getNotation = (move) => {
  if (!move) return;
  let notation = "";
  let capture = "";
  let condition = "";
  let type = move.piece.type;
  if (type === "king" && Math.abs(move.to - move.from) === 2) {
    if (move.from - move.to > 0) notation = "O-O-O";
    else notation = "O-O";
  } else {
    let { row, col } = getSquarePosition(move.to);
    row = getRowNotation(row);
    col = getColNotation(col);
    type = getPieceNotation(type);

    if (!!move.captured) capture = "x";
    if (
      checkmate(
        move.piece.color === "white" ? "black" : "white",
        boardState.get(),
      ) === "checkmate"
    )
      condition = "#";
    else if (
      checkedKing(
        move.piece.color === "white" ? "black" : "white",
        boardState.get(),
      )
    )
      condition = "+";
  }
  notation =
    notation === ""
      ? type + capture + col + row + condition
      : notation + condition;
  return notation;
};

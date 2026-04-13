import { boardState } from "../Logic/boardState.js";
import { square } from "./square.js";
const state = boardState.get();
const select = (piece, moves) => {
  if (piece) square.addClass(piece?.index, "selected");
  moves.forEach((i) => {
    if (!!state[i]) square.addClass(i, "capture");
    else square.addClass(i, "validMove");
  });
};
const deselect = (piece, moves) => {
  if (piece) square.removeClass(piece?.index, "selected");
  moves.forEach((i) => {
    if (!!state[i]) square.removeClass(i, "capture");
    square.removeClass(i, "validMove");
  });
};
export const UI = { select, deselect };

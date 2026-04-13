import { game } from "../Logic/gameState.js";
import { square } from "./square.js";

const select = (piece, moves) => {
  if (piece) square.addClass(piece?.index, "selected");
  moves.forEach((i) => {
    square.addClass(i, "validMove");
  });
};
const deselect = (piece) => {
  if (piece) square.removeClass(piece?.index, "selected");
  game.getActiveLegalMoves().forEach((i) => {
    square.removeClass(i, "validMove");
  });
};
export const UI = { select, deselect };

/**
 *   @import {Piece} from "../types.js"
 */
import { getRowFirstIndex } from "./helpers.js";

/**
 * @type {(Piece|Null)[]} The initial board state
 */
const state = new Array(64).fill(null);
/**
 * Fills board state black or white back row with pieces, takes row number and pieces color
 * @param {Number} row - row number that needs to be filled
 * @param {String} color - pieces color
 */
const fillBackRow = (row, color) => {
  const backRow = [
    "rook",
    "knight",
    "bishop",
    "queen",
    "king",
    "bishop",
    "knight",
    "rook",
  ];
  let index = getRowFirstIndex(row);
  backRow.forEach((type) => {
    const tracked = type === "rook" || type === "king";
    state[index] = { type, color, index, ...(tracked && { hasMoved: false }) };
    index++;
  });
};

/**
 * Fills board state black or white second row with pawns, takes row number and pieces color
 * @param {Number} row - row number that needs to be filled
 * @param {String} color -pieces color
 */
const fillPawnRow = (row, color) => {
  const type = "pawn";
  let index = getRowFirstIndex(row);

  for (let i = 0; i < 8; i++) {
    state[index] = { type, color, index };
    index++;
  }
};
/**
 *
 */
function resetBoardState() {
  state.length = 0;
  state.length = 64;
  state.fill(null, 0, 64);
  fillBackRow(1, "black");
  fillPawnRow(2, "black");
  fillPawnRow(7, "white");
  fillBackRow(8, "white");
}

fillBackRow(1, "black");
fillPawnRow(2, "black");
fillPawnRow(7, "white");
fillBackRow(8, "white");

const get = () => state;
const getCopy = () => structuredClone(state);

export const boardState = { get, getCopy, resetBoardState };

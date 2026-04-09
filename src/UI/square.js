import { getSquarePosition } from "../Logic/helpers.js";

/**
 * Add to the class list light or dark class based on if the sum of row & column is odd or even
 * @param {String[]} classList - Square ClassList
 * @param {Number} sum - Sum of row & column
 */
function setColor(classList, sum) {
  if (sum % 2 === 0) classList.push("light");
  else classList.push("dark");
}
/**
 *  Set the classes for a square
 *
 * @param {HTMLDivElement} square
 * @param {Number} col
 * @param {Number} row
 */
function setInitialClass(square, i) {
  const { row, col } = getSquarePosition(i);
  const classList = ["square"];
  const sum = col + row;
  setColor(classList, sum);
  square.classList.add(...classList);
}

/**
 * Create, prepare & return the square div from it's index
 * @param {Number} i - Square index in board
 * @returns {HTMLDivElement} Square
 */
function create(i) {
  const square = document.createElement("div");
  setInitialClass(square, i);
  square.setAttribute("index", i);
  return square;
}

function addClass(i, className) {
  document.querySelector(`[index="${i}"]`).classList.add(className);
}
function removeClass(i, className) {
  document.querySelector(`[index="${i}"]`).classList.remove(className);
}
export const square = { addClass, removeClass, create };

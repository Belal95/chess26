/**
 * Object holding square's column & row
 * @typedef {Object} position
 * @property {number} col - Square's column
 * @property {number} row - Square's row
 */
/**
 * Calculate Square's Row and Column from index
 * @param {number} i - Square index
 * @returns {position} { row , col }
 */
const getSquarePosition = (i) => {
  return { col: (i % 8) + 1, row: Math.floor(i / 8) + 1 };
};
/**
 * Add to the class list light or dark class based on if the sum of row & column is odd or even
 * @param {String[]} classList - Square ClassList
 * @param {Number} sum - Sum of row & column
 */
function setSquareColor(classList, sum) {
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
function setSquareClass(square, i) {
  const { row, col } = getSquarePosition(i);
  const classList = ["square"];
  const sum = col + row;
  setSquareColor(classList, sum);
  square.classList.add(...classList);
}

/**
 * Create, prepare & return the square div from it's index
 * @param {Number} i - Square index in board
 * @returns {HTMLDivElement} Square
 */
function createSquare(i) {
  const square = document.createElement("div");
  const { col, row } = getSquarePosition(i);
  setSquareClass(square, i);
  square.setAttribute("index", i);
  return square;
}

/**
 * Create the chess Board
 * Takes an empty element and creates make it the board
 * @param {HTMLDivElement} board - The element with id board
 */
function createBoard(board) {
  for (let i = 0; i < 64; i++) {
    const square = createSquare(i);
    board.appendChild(square);
  }
}
export const Board = {
  getSquarePosition,
  setSquareColor,
  createSquare,
  createBoard,
};

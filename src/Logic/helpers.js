/**
 * Calculate Square's Row and Column from index
 * @param {number} i - Square index
 * @returns {{ row:Number , col:Number }}
 */
const getSquarePosition = (i) => {
  return { col: (i % 8) + 1, row: Math.floor(i / 8) + 1 };
};
/**
 * Get first index of a row
 * @param {Number} row
 * @returns
 */
const getRowFirstIndex = (row) => (row - 1) * 8;
/**
 * Get Index from row and column
 * @param {Number} col
 * @param {Number} row
 * @returns
 */
const getIndex = (col, row) => (row - 1) * 8 + (col - 1);
/**
 * Check if a square is inside the 64*64 grid using row and column
 * @param {Number} col
 * @param {Number} row
 * @returns
 */
const checkInBound = (col, row) => col >= 1 && col <= 8 && row >= 1 && row <= 8;
/**
 * Get all squares indexes between 2 numbers
 * @param {Number} from
 * @param {Number} to
 * @returns {[Number]}
 */
const squaresBetween = (from, to) => {
  const [min, max] = from < to ? [from, to] : [to, from];
  return Array.from({ length: max - min - 1 }, (_, i) => min + i + 1);
};

export {
  getSquarePosition,
  getRowFirstIndex,
  getIndex,
  checkInBound,
  squaresBetween,
};

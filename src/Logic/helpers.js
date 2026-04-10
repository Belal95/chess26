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
export const getSquarePosition = (i) => {
  return { col: (i % 8) + 1, row: Math.floor(i / 8) + 1 };
};
export const getRowFirstIndex = (row) => (row - 1) * 8;
export const getIndex = (col, row) => (row - 1) * 8 + (col - 1);
export const checkInBound = (col, row) =>
  col >= 1 && col <= 8 && row >= 1 && row <= 8;

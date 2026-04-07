/**
 * @param boardState The actual board state
 */

export const boardState = new Array(64).fill(null);

/**
 * Fills board state black or white back row with pieces, take
 * @param {Number} index - index where
 * @param {*} color
 */
const fillBackRow = (index, color) => {
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
  backRow.forEach((type) => {
    boardState[index] = { type, color, index };
    index++;
  });
};

const fillPawnRow = (index, color) => {
  const type = "pawn";
  for (let i = 0; i < 8; i++) {
    boardState[index] = { type, color, index };
    index++;
  }
};

fillBackRow(0, "black");
fillPawnRow(8, "black");
fillPawnRow(48, "white");
fillBackRow(56, "white");

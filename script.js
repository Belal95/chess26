const board = document.getElementById("board");
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    const square = document.createElement("div");
    square.setAttribute("style", "square");
    square.setAttribute("row", i + 1);
    square.setAttribute("col", j + 1);
    board.append(square);
  }
}

function checkColor(row, col) {}

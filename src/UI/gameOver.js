export function gameOver(condition, color) {
  const win = document.getElementById("win");
  if (condition === "checkmate") win.innerHTML = `Checkmate for ${color}`;
  if (condition === "stalemate") win.innerHTML = `Draw by stalemate`;
}

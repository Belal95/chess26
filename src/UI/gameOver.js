export function gameOver(condition, color) {
  const win = document.getElementById("win");
  if (condition === "checkmate")
    win.innerHTML = `${color.charAt(0).toUpperCase() + color.slice(1)} is Checkmated`;
  if (condition === "stalemate") win.innerHTML = `Draw by stalemate`;
}

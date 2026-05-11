import { resetHandler } from "../handler/click/resetHandler.js";

export function gameOverUI(condition, color) {
  const win = document.getElementById("win");
  if (condition === "checkmate")
    win.innerHTML = `<div>${color.charAt(0).toUpperCase() + color.slice(1)} is Checkmated</div>`;
  if (condition === "stalemate") win.innerHTML = `<div>Draw by stalemate</div>`;
  const resetButton = document.createElement("div");
  resetButton.innerHTML = "Start a new game";
  resetButton.classList.add("reset-button");
  resetButton.addEventListener("click", resetHandler);
  win.appendChild(resetButton);
}

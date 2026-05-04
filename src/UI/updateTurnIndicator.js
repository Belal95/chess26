/**
 *
 * @param {"white"|"black"} color
 */
export function updateTurnIndicator(color) {
  const win = document.getElementById("win");
  win.innerHTML = `${color.charAt(0).toUpperCase() + color.slice(1)}'s Turn`;
}

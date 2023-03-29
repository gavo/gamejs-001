const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
let elementSize;

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

function startGame() {}

function resizeCanvas() {
  let canvasSize = Math.min(window.innerHeight, window.innerWidth) * 0.85;
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);
  elementSize = canvasSize / 10;
  startGame();
}

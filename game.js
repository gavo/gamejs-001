const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
let elementSize;

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
window.addEventListener("keydown", moveByKeys);
btnUp.addEventListener("click", moveUp());
btnDown.addEventListener("click", moveDown);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

function moveByKeys(event) {
  if (event.code === "ArrowUp") moveUp();
  else if (event.code === "ArrowDown") moveDown();
  else if (event.code === "ArrowLeft") moveLeft();
  else if (event.code === "ArrowRight") moveRight();
}

function getMap(level) {
  return maps[level].match(/[\-IXO]+/g).map((a) => a.split(""));
}

function startGame() {
  game.font = elementSize + "px Verdana";
  game.textAlign = "start";
  game.textBaseline = "top";

  const map = getMap(0);

  map.forEach((rows, row) => {
    rows.forEach((key, col) => {
      const emoji = emojis[key];
      const posX = col * elementSize - elementSize * 0.2;
      const posY = row * elementSize + elementSize * 0.05;
      game.fillText(emoji, posX, posY);
    });
  });
}

function resizeCanvas() {
  let canvasSize = Math.min(window.innerHeight, window.innerWidth) * 0.8;
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);
  elementSize = canvasSize / 10;
  startGame();
}

function moveUp() {
  console.log("Me muevo hacia arriba");
}
function moveDown() {
  console.log("Me muevo hacia abajo");
}
function moveLeft() {
  console.log("Me muevo a la izquierda");
}
function moveRight() {
  console.log("Me muevo a la derecha");
}

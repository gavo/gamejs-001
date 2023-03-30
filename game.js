const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");

let elementSize;
let canvasSize;

const player = {
  x: undefined,
  y: undefined,
};

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
  drawMap();
}

function startGame() {
  game.font = elementSize + "px Verdana";
  game.textAlign = "start";
  game.textBaseline = "top";
  drawMap();
  drawPlayer();
}

function getMap(level) {
  return maps[level].match(/[\-IXO]+/g).map((a) => a.split(""));
}

function drawMap() {
  game.clearRect(0, 0, canvas.width, canvas.height);
  const map = getMap(2);

  map.forEach((rows, row) => {
    rows.forEach((key, col) => {
      const emoji = emojis[key];
      const posX = col * elementSize;
      const posY = row * elementSize;
      game.fillText(emoji, posX, posY);
      if ((player.x === undefined || player.y === undefined) && key === "O") {
        player.x = col;
        player.y = row;
      }
    });
  });
  drawPlayer();
}

function drawPlayer() {
  const emoji = emojis["PLAYER"];
  const posX = player.x * elementSize;
  const posY = player.y * elementSize;
  game.fillText(emoji, posX, posY);
}

function resizeCanvas() {
  canvasSize = Math.min(window.innerHeight, window.innerWidth) * 0.85;
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);
  elementSize = (canvasSize / 10) * 0.98;
  startGame();
}

function moveUp() {
  if (player.y > 0) player.y -= 1;
}

function moveDown() {
  if (player.y < 9) player.y += 1;
}

function moveLeft() {
  if (player.x > 0) player.x -= 1;
}

function moveRight() {
  if (player.x < 9) player.x += 1;
}

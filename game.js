const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
let elementSize;

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

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

function getMap(level) {
  return maps[level].match(/[\-IXO]+/g).map((a) => a.split(""));
}

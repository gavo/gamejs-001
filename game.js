const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const txtLives = document.querySelector("#lives");
const txtTime = document.querySelector("#time");

let elementSize;
let canvasSize;
let map;
let level = 0;
let lives = 3;
let stop = false;
let timeStart = undefined;
let timer;

const player = {
  x: undefined,
  y: undefined,
};

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
window.addEventListener("keydown", moveByKeys);
btnUp.addEventListener("click", moveUp);
btnDown.addEventListener("click", moveDown);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

function moveByKeys(event) {
  if (event.code === "ArrowUp") moveUp();
  else if (event.code === "ArrowDown") moveDown();
  else if (event.code === "ArrowLeft") moveLeft();
  else if (event.code === "ArrowRight") moveRight();
}

function checkCollision() {
  drawMap();
  const pos = map[player.y][player.x];
  if (pos === "I") {
    if (level < maps.length - 1) {
      level++;
      player.x = undefined;
      player.y = undefined;
      drawMessage("Pasaste al Nivel " + (level + 1), 1000, startGame);
    } else {
      level = 0;
      player.x = undefined;
      player.y = undefined;
      drawMessage("Ganaste 🏆", 3000, startGame);
    }
  } else if (pos === "X") {
    player.x = undefined;
    player.y = undefined;
    lives--;
    if (lives > 0) {
      setTimeout(() => {
        drawMessage("Explotaste 👎", 2000, startGame);
      }, 1000);
    } else {
      lives = 3;
      level = 0;
      clearInterval(timer);
      setTimeout(() => {
        drawMessage("👎 Perdiste 👎", 2500, function () {
          timeStart = undefined;
          startGame();
        });
      }, 1000);
    }
  }
}

function startGame() {
  game.font = elementSize + "px Verdana";
  game.textAlign = "start";
  game.textBaseline = "top";
  map = getMap();
  showLives();
  drawMap();
  drawPlayer();
  drawMessage("Nivel " + (level + 1), 1000, drawMap);
  if (!timeStart) {
    timeStart = new Date().getTime();
    updateTime();
  }
}

function getMap() {
  return maps[level].match(/[\-IXO]+/g).map((a) => a.split(""));
}

function drawMap() {
  game.clearRect(0, 0, canvas.width, canvas.height);
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
  const pos = map[player.y][player.x];
  const posX = player.x * elementSize;
  const posY = player.y * elementSize;
  let iconPlayer =
    pos === "X"
      ? emojis["PLAYER_COLLISION"]
      : pos === "I"
      ? emojis["PLAYER_LEVELUP"]
      : emojis["PLAYER"];
  if (pos === "X") {
    stop = true;
    setTimeout(() => {
      game.fillText(emojis["BOMB_COLLISION"], posX, posY);
      stop = false;
    }, 600);
  }
  game.fillText(iconPlayer, posX, posY);
}

function resizeCanvas() {
  canvasSize = Math.min(window.innerHeight, window.innerWidth) * 0.85;
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);
  elementSize = (canvasSize / 10) * 0.98;
  startGame();
}

function moveUp() {
  if (stop) return;
  if (player.y > 0) player.y -= 1;
  checkCollision();
}

function moveDown() {
  if (stop) return;
  if (player.y < 9) player.y += 1;
  checkCollision();
}

function moveLeft() {
  if (stop) return;
  if (player.x > 0) player.x -= 1;
  checkCollision();
}

function moveRight() {
  if (stop) return;
  if (player.x < 9) player.x += 1;
  checkCollision();
}

function drawMessage(text, time, callBack) {
  stop = true;
  const old = game.fillStyle;
  game.fillStyle = "#000000A0";
  game.fillRect(0, canvasSize / 2.5, canvasSize, canvasSize / 5);

  game.textAlign = "center";
  game.fillStyle = "#FFFFFF";
  game.fillText(text, canvasSize / 2, canvasSize / 2.2);
  game.fillStyle = old;

  game.textAlign = "start";
  setTimeout(() => {
    stop = false;
    callBack();
  }, time);
}

function showLives() {
  const hearts = "".padEnd(lives, "*").replaceAll("*", emojis["HEART"]);
  txtLives.innerHTML = hearts;
}

function updateTime() {
  timer = setInterval(() => {
    let now = new Date().getTime();
    let date = getTimeString(Math.round((now - timeStart) / 1000, 0));
    txtTime.innerHTML = date;
  }, 1000);
}

function getTimeString(time) {
  if (time < 60) return "00:" + (time + "").padStart(2, "0");
  if (time < 3600) {
    return (
      (time / 60).toFixed(0).padStart(2, "0") +
      ":" +
      (time % 60).toFixed(0).padStart(2, "0")
    );
  } else {
    let hour = (time / 60).toFixed(0);
    let minutes = (time % 60) + "";
    let seconds = ((time % 60) % 60) + "";
    return (
      hour.padStart(2, "0") +
      ":" +
      minutes.padStart(2, "0") +
      ":" +
      seconds.padStart(2, "0")
    );
  }
}

const body = document.querySelector("body");

const IMG_NUM = 8;

function paintImage(imgNum) {
  const img = new Image();
  img.src = `img/${imgNum + 1}.jpg`;
  img.classList.add("bgImg");
  body.appendChild(img);
}

function genRandom() {
  const num = Math.floor(Math.random() * IMG_NUM);
  return num;
}

function init() {
  const randomNum = genRandom();
  paintImage(randomNum);
}

init();
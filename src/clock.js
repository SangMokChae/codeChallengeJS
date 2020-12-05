const clock = document.querySelector("#js-clock"),
  time = clock.querySelector("h1");

function loadTimes() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'Pm' : 'Am';
  const seconds = date.getSeconds();
  time.innerText = `${ampm} ${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
  loadTimes();
  setInterval(loadTimes, 1000);
}
init();
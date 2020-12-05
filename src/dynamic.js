const dynamic = document.querySelector("#dynamic");

function randomString() {
  let stringArr = ["Nice to see you again","Have a good day!","Good luck to you today","I hope you always stay healthy and happy","Take care today!","Effort dose not betray"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");
  return selectStringArr;
}

function resetTyping() {
  dynamic.textContent = "";
  loadChar(randomString());
}

// 한글자씩 텍스트 출력
function loadChar(randomArr) {
  if(randomArr.length > 0) {
    dynamic.textContent += randomArr.shift();
    setTimeout(function() {
      loadChar(randomArr);
    },100);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

// 커서깜빡 효과
function blink() {
  dynamic.classList.toggle("active");
}

function init() {
  setInterval(blink, 500);
  loadChar(randomString());
}

init();
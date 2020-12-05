const jsForm = document.querySelector("#js-form"),
  jsInput = jsForm.querySelector("input"),
  sayHello = document.querySelector("#js-hello");

const USER_LS = "user";

function handleSubmit(event) {
  user = jsInput.value;
  sayHello.innerText = `Hello. ${user}`;
  localStorage.setItem(USER_LS, user);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if(currentUser !== null) {
    sayHello.innerText = `Hello. ${currentUser}!`;

    jsForm.removeChild(jsInput);
  }
}

function init() {
  loadName();
  jsForm.addEventListener("submit", handleSubmit);
}
init();
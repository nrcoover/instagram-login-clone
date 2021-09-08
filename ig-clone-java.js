// LOGIN BUTTON ENABLE + DISABLE FUNCTION

let username = document.querySelector("#username");
let password = document.querySelector("#password")
let loginButton = document.querySelector("#login-btn");

loginButton.disabled = true;
username.addEventListener("change", stateHandle);
password.addEventListener("change", stateHandle);

function stateHandle() {
  if (username.value.length > 0 && password.value.length > 5 ) {
    loginButton.disabled = false; 
  } else {
    loginButton.disabled = true;
  }
}
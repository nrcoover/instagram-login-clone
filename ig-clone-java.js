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

// FLOATING LABEL MOVEMENT TRIGGER BUTTON

function labelSwitch() {
  let floatLabel = document.getElementsByClassName("floating-label");
  let placeholder = document.getElementsByClassName("form-input").placeholder;
  let formInput = document.getElementsByClassName("form-input");

  styleSheet.insertRule(".login .floating-label {visibility: hidden;}", 100);


  // floatLabel.style.visibility = "hidden";

  // if (formInput.value.length > 0) {
  //   floatLabel.style.visibility = "hidden";
  // } else {
  //   floatLabel.style.visibility = "visible";
  // }
}
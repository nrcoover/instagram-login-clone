// document.getElementById("login-btn").disabled=true;


// login-btn.setAttribute('disabled', 'disabled');


// document.getElementbyId("login-btn").addEventListener('form-input', function() {
//   if (document.getElementById("username").value.length > 0 && document.getElementById("password").value.length > 5) {
//       document.getElementById("login-btn").disabled=false;
//     } else {
//       document.getElementById("login-btn").disabled=true;
//     }
// });



let username = document.querySelector("#username");
let password = document.querySelector("#password")
let loginButton = document.querySelector("#login-btn");

loginButton.disabled = true;
username.addEventListener("change", checkUsername);
password.addEventListener("change", checkPassword);

checkUsername;
checkPassword;
disableButton;

function checkUsername(a) {
  if (a.value > 0) {
    return true; 
  } else {
    return false;
}

function checkPassword(b) {
  if (b.value > 5) {
    return true; 
  } else {
    return false;
}

function disableButton() {
  if (checkUsername && checkPassword == true ) {
    loginButton.disabled = false;
    loginButton.enabled = true; 
  } else {
    loginButton.disabled = true;
    loginButton.enabled = false;
  }
}

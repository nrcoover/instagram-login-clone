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
username.addEventListener("change", stateHandle);
password.addEventListener("change", stateHandle);

function stateHandle() {
  if (username.value > 0 && password.value > 5 ) {
    loginButton.disabled = true; 
  } else {
    loginButton.disabled = false;
  }
}


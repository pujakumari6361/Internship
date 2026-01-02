const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const message = document.getElementById("message");

signupBtn.onclick = function () {

  if (nameInput.value === "") {
    message.innerText = "Enter your name";
    message.style.color = "red";
  }
  else if (emailInput.value === "") {
    message.innerText = "Enter email";
    message.style.color = "red";
  }
  else if (passwordInput.value === "") {
    message.innerText = "Enter password";
    message.style.color = "red";
  }
  else {
    message.innerText = "Signup successful";
    message.style.color = "green";

    // data save (demo)
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
  }

};
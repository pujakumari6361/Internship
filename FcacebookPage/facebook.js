document.addEventListener("DOMContentLoaded", function () {

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  const message = document.getElementById("message");

  loginBtn.addEventListener("click", function () {

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === "" || password === "") {
      message.textContent = "Please fill all fields";
      return;
    }

    // Save login data (dummy)
    localStorage.setItem("fbEmail", email);
    localStorage.setItem("fbPassword", password);

    message.style.color = "green";
    message.textContent = "Login successful (Saved in localStorage)";
  });

});
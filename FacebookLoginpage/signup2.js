function signup() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const msg = document.getElementById("msg");

  if (fname === "") {
    msg.innerText = "Please fill all the fields!";
    msg.style.color = "red";
  }

  else if(lname === "") {
    msg.innerText = "Please fill the last name";
    msg.style.color = "red";

  } 
  
  else if(email === ""){
    msg.innerText = "Please fill the phone number or email";
    msg.style.color = "red";

  }
  
  else if(password === ""){
    msg.innerText = "Please fill the password";
    msg.style.color = "red";

  }
  
  else if(day === ""){
    msg.innerText = "Please select your birthday date";
    msg.style.color = "red";

  }

   else if(month === ""){
    msg.innerText = "Please select your birthday month";
    msg.style.color = "red";

  }

   else if(year === ""){
    msg.innerText = "Please select your birthday years";
    msg.style.color = "red";

  }
  

  
  else {
    msg.innerText = "Signup successful!";
    msg.style.color = "green";

    //save for login
    localStorage.setItem("userEmail" ,email);
    localStorage.setItem("userPaassword",password);
  }
}
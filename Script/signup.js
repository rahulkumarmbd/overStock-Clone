// SignUp Js
let errorMessage = (err) => {
  const errorDiv = document.querySelector("#errorMessage");
  errorDiv.style.display = "block";
  const error = document.createElement("p");
  error.textContent = err;
  errorDiv.append(error);
  // clearTimeout(state);
  let state = setTimeout(function () {
    errorDiv.innerHTML = "";
    errorDiv.style.display = "none";
  }, 5000);
};

const signUpBtn = document.querySelector(".signUp button");
signUpBtn.addEventListener("click", async (e) => {
  const checkbox = document.getElementById("checkbox").checked;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (
    email === "" ||
    password === "" ||
    confirmPassword === "" ||
    checkbox === false
  ) {
    return;
  } else if(!isEmail(email)){
    e.preventDefault();
    errorMessage(
      "Email is not Valid"
    );
    return;
  }
  else if (password != confirmPassword) {
    e.preventDefault();
    errorMessage(
      "The passwords you have entered do not match. Please try again."
    );
    return;
  } else if (password.length < 8 && password.length != 0) {
    e.preventDefault();
    errorMessage(
      "Password must be a minimum of 8 characters and cannot exceed 70 characters"
    );
    errorMessage(
      "Password must contain at least 1 Uppercase , 1 lowercase , 1 number and 1 special Character."
    );
    return;
  }

  let passResult = {};
  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 90) {
      passResult[0] = "yes1";
    } else if (password.charCodeAt(i) > 96 && password.charCodeAt(i) < 123) {
      passResult[1] = "yes2";
    } else if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58) {
      passResult[2] = "yes3";
    } else if (
      (password.charCodeAt(i) > 57 && password.charCodeAt(i) < 65) ||
      (password.charCodeAt(i) > 32 && password.charCodeAt(i) < 48)
    ) {
      passResult[3] = "yes4";
    }
  }
  // console.log(passResult);
  if (Object.keys(passResult).length != 4) {
    e.preventDefault();
    errorMessage(
      "Password must be a minimum of 8 characters and cannot exceed 70 characters"
    );
    errorMessage("Password must contain at least 1 Uppercase , 1 lowercase , 1 number and 1 special Character.");
    return;
  }
  e.preventDefault();

  let signup_data = {
    email: email,
    password: password,
  };
  signup_data = JSON.stringify(signup_data);
  console.log(signup_data);

  let register_api = `https://overstock-2.herokuapp.com/register`

  var response = await fetch(register_api, {
    method: "POST",
    body: signup_data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log("data: ", data);
  if (data.error == false) {
    errorMessage(data.message);
  } else {
    errorMessage(data.message);
  }
});

//signIn js
const signInBtn = document.querySelector(".signIn button");
signInBtn.addEventListener("click", async (e) => {
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  if (email === "" || password === "") {
    return;
  }
  else if(!isEmail(email)){
    e.preventDefault();
    errorMessage(
      "Email is not Valid"
    );
    return;
  }
  e.preventDefault();

  let login_data = {
    email: email,
    password: password,
  };

  login_data = JSON.stringify(login_data);

  let login_api = `https://overstock-2.herokuapp.com/login`

  //fetch request

  let response = await fetch(login_api, {
    method: "POST",
    body: login_data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log("data: ", data);
  if (data.error === true) {
    errorMessage(data.message);
  } else {
    if(data.token) {
      window.location.href = "checkout.html"
    }
    else if(data.message){
      errorMessage(data.message)
    }
    else{
      errorMessage("email or password is incorrect");
    }
  }

});



function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

document.getElementById("signout").addEventListener("click", () => {
  const login = localStorage.getItem("loginCheck")

  if (login === "true") {
    localStorage.setItem("loginCheck", "false")
    document.getElementById("signout").textContent = "Sign In"
  } 
})

const login = localStorage.getItem("loginCheck")

text.addEventListener("click",() => {
  if(text.textContent == "Sign Out"){
    localStorage.setItem("loginCheck","false");
  }
  window.location.href = "signup.html"
})
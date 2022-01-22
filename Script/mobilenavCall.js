let MobileEvent = document.querySelectorAll(".MobileEve");

for (let i = 0; i < MobileEvent.length; i++) {
  MobileEvent[i].addEventListener("click", function () {
    let MobileEventText = document.querySelectorAll(".MobileEve > span");
    localStorage.setItem("pageName", MobileEventText[i].textContent);
    console.log(MobileEventText[i].textContent);
    window.location.href = "category.html";
  });
}
let text = document.getElementById("signout");

text.addEventListener("click", () => {
  if (text.textContent == "Sign Out") {
    localStorage.setItem("loginCheck", "false");
  }
  window.location.href = "signup.html"
});

const status = localStorage.getItem("loginCheck") || "false";
if (status !== "false") {
  text.textContent = "Sign Out";
} else {
  text.textContent = "Sign In";
}

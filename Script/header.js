// for (let i = 0; i < 13; i++) {
//   let sectionDiv = document.querySelectorAll(".section-div > div")
//   // console.log(sectionDiv)
//   sectionDiv[i].addEventListener("mouseover", function () {
//     let dropDownContainer = document.querySelectorAll(".dropdown-content-part")
//     dropDownContainer[i].style.display = "flex"
//   })
//   sectionDiv[i].addEventListener("mouseout", function () {
//     let dropDownContainer = document.querySelectorAll(".dropdown-content-part")
//     dropDownContainer[i].style.display = "none"
//     dropDownContainer[i].addEventListener("mouseover", function () {
//       dropDownContainer[i].style.display = "flex"
//     })
//     dropDownContainer[i].addEventListener("mouseout", function () {
//       dropDownContainer[i].style.display = "none"
//     })
//   })
// }

document.getElementById("signout").addEventListener("click", () => {
  const login = localStorage.getItem("loginCheck")

  if (login === "true") {
    localStorage.setItem("loginCheck", "false")
    document.getElementById("signout").textContent = "Sign In"
  } 
})

const login = localStorage.getItem("loginCheck")

if (login === "true") {
  document.getElementById("signout").textContent = "Sign Out"
} else {
  document.getElementById("signout").textContent = "Sign In"
}
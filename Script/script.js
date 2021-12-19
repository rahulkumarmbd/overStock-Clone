function responsivewatchSlider() {
  var slideList = document.querySelector(".slider")

  var count = 1
  var click = 5
  var size = document.querySelector(".slider").offsetWidth
  if (size < 998) {
    click = 7
  }
  if (count == 1) {
    document.getElementById("prevwatch").style.opacity = 0.5
    document.getElementById("prevwatch").style.display = "hidden"
  }
  console.log(size)
  function prevwatchSlide() {
    if (count == 2) {
      document.getElementById("prevwatch").style.opacity = 0.5
    }
    if (count > 1) {
      count = count - 2
      slideList.style.left = "-" + count * 31 + "rem"

      document.getElementById("nextwatch").style.opacity = 1

      count++
    } else {
      document.getElementById("prevwatch").style.opacity = 0.5
      document.getElementById("prevwatch").style.display = "hidden"
    }
  }
  function nextwatchSlide() {
    if (count == click - 1) {
      document.getElementById("nextwatch").style.opacity = 0.5
      document.getElementById("nextwatch").style.display = "hidden"
    }
    if (count < click) {
      slideList.style.left = "-" + count * 31 + "rem"

      document.getElementById("prevwatch").style.opacity = 1
      count++
    } else {
      document.getElementById("nextwatch").style.opacity = 0.5
      document.getElementById("nextwatch").style.display = "hidden"
    }
  }
  document.getElementById("prevwatch").addEventListener("click", prevwatchSlide)
  document.getElementById("nextwatch").addEventListener("click", nextwatchSlide)
}
window.page = (name) => {
  var pageName = localStorage.getItem("pageName") || ""
  localStorage.setItem("pageName", name)
  console.log(name)
  window.location.href = "category.html"
}
import header from "/components/navbar.js"

document.querySelector("#navPut").innerHTML = header()
import footer from "/components/footer.js"
import mobileNav from "/components/mobilenav.js"

document.querySelector("#mobilePtn").innerHTML = mobileNav()
document.querySelector("#footerPut").innerHTML = footer()
responsivewatchSlider()

for(let i=0; i<13; i++){
  let sectionDiv = document.querySelectorAll(".section-div > div");
  sectionDiv[i].addEventListener("mouseover", function () {
    let dropDownContainer = document.querySelectorAll(".dropdown-content-part");
    dropDownContainer[i].style.display = "flex";
  });
  sectionDiv[i].addEventListener("mouseout", function () {
    let dropDownContainer = document.querySelectorAll(".dropdown-content-part");
    dropDownContainer[i].style.display = "none";
    dropDownContainer[i].addEventListener("mouseover", function () {
      dropDownContainer[i].style.display = "flex";
    });
    dropDownContainer[i].addEventListener("mouseout", function () {
      dropDownContainer[i].style.display = "none";
    });
  });
}

// let mains = document.querySelectorAll(".dropdown-content-part > div > div > div");
// for(let i=0; i<mains.length; i++){
//   mains[i].addEventListener("click",function(){
//     console.log(mains[i].textContent);
//     localStorage.setItem("Items",mains[i].textContent);
//     window.location.href = "productsDisplay.html";
//   })
// }

let sectionDiv = document.querySelectorAll(".section-div > div");
for(let i=0; i<sectionDiv.length; i++){
  sectionDiv[i].addEventListener("click",function(){
    console.log(sectionDiv[i].textContent);
    localStorage.setItem("pageName",sectionDiv[i].textContent);
    window.location.href = "category.html";
  })
}

// let blackDiv = document.querySelectorAll(".dark-div");
// for(let i=0; i<blackDiv.length; i++){
//   blackDiv[i].addEventListener("click",function(){
//     console.log(blackDiv[i].textContent);
//     localStorage.setItem("productsPageName",blackDiv[i].textContent);
//     window.location.href = "productsDisplay.html";
//   })
// }


let overstockIndex = document.querySelectorAll(".overstockIndex")
for (let i = 0; i < overstockIndex.length; i++) {
  overstockIndex[i].addEventListener("click", function () {
    window.location.href = "index.html"
  })
}

let account1 = document.getElementById("account1")
account1.addEventListener("click", function () {
  window.location.href = "signup.html"
})

let cart1 = document.getElementById("cart1")
cart1.addEventListener("click", function () {
  window.location.href = "cart.html"
})
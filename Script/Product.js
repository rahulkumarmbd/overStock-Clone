var item = JSON.parse(localStorage.getItem("Items")) || ""
console.log(item)
var cart = JSON.parse(localStorage.getItem("CartOverStock")) || []
let imagesArr = [
  item.imageURL,
  item.img1,
  item.img2,
  item.img3,
  item.img4,
  item.img5,
]
document.getElementById("productImage").src = item.imageURL
document.getElementById("img1p").src = item.imageURL
document.getElementById("img2p").src = item.img1
document.getElementById("img3p").src = item.img2
document.getElementById("img4p").src = item.img3
document.getElementById("img5p").src = item.img4
document.getElementById("img6p").src = item.img5
document.getElementById("maincatergory1").textContent = item.main_catergory
document.getElementById("mainsubcatergory2").textContent =
  item.main_sub_catergory
document.getElementById("subcatergory3").textContent = item.sub_catergory
document.getElementById("catergory4").textContent = item.catergory
document.getElementById("productName1").textContent = item.name
document.getElementById(
  "productprice1"
).innerHTML = `<span>INR</span>${item.price}<span>00</span>`
document.getElementById("colorImg1").src = imagesArr[0]

document.getElementById("colorName1").textContent = item.color[0]
if (item.color[1] !== "") {
  document.getElementById("colorName2").textContent = item.color[1]
  document.getElementById("colorImg2").src = imagesArr[1]
} else {
  document.getElementById("colorImg2").style.display = "none"
}
document.getElementById("_id").textContent = `ITEM #${item._id}`
document.getElementById("addToCart").addEventListener("click", () => {
  var qty = document.getElementById("qtyP").value
  item["qty"] = qty
  console.log(item._id)
  console.log(cart)
  if (cart.length !== 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id !== item._id) {
        cart.push(item)
        localStorage.setItem("CartOverStock", JSON.stringify(cart))
      } else {
        document.getElementById("addToCart").disabled = true
      }
    }
  } else {
    cart.push(item)
    localStorage.setItem("CartOverStock", JSON.stringify(cart))
  }
  window.location.href = "cart.html"
})

setTimeout(function () {
  document.getElementById("loaderSS").style.display = "none"
  document.getElementById("compo").style.display = "block"
}, 3500)

let current = 0
let nextBtn = document.querySelector(".slider1 > .next-arr")
let iconSlides = document.querySelectorAll(".slider2 .iconSlides > div")
let slider1 = document.querySelector(".slider1")
let div = document.querySelector(".slider2 .iconSlides")
let itemDiv = document.querySelector(".item-info")
itemDiv.addEventListener("click", function () {
  iconSlides.forEach((item) => {
    item.classList.remove("blackBorder")
  })
})
slider1.addEventListener("mouseover", function () {
  iconSlides.forEach((item) => {
    item.classList.remove("blackBorder")
  })
})
iconSlides.forEach((iconSlide, index) => {
  iconSlide.addEventListener("click", function () {
    previewNextSlide(index)
    iconSlides.forEach((item) => {
      item.classList.remove("blackBorder")
    })
    iconSlide.classList.add("blackBorder")
    console.log(iconSlide)
    console.log("hello")
  })
})

function previewNextSlide(index) {
  current++
  if (typeof index === "number") {
    current = index
  }
  if (current === imagesArr.length) {
    current = imagesArr.length - 1
  }
  let img = document.querySelector(".slider1 > div > img")
  img.src = imagesArr[current]
  iconSlides.forEach((item) => {
    item.classList.remove("active")
  })
  iconSlides[current].classList.add("active")
  if (current < 4) {
    div.style.transform = "translateX(-0%)"
    click = 0
  }
  if (current >= 4) {
    div.style.transform = "translateX(-7.6%)"
    click = 1
  }
  if (current >= 8) {
    div.style.transform = "translateX(-60.7%)"
    click = 2
  }
}

nextBtn.addEventListener("click", previewNextSlide)

function previewPrevSlide() {
  current--
  if (current < 0) {
    current = 0
  }
  let img = document.querySelector(".slider1 > div > img")
  img.src = imagesArr[current]
  iconSlides[current + 1].classList.remove("active")
  iconSlides[current].classList.add("active")
  console.log(current)
  if (current <= 4) {
    div.style.transform = "translateX(-0%)"
    click = 0
  }
  if (current <= 8 && current > 4) {
    div.style.transform = "translateX(-7.6%)"
    click = 1
  }
  if (current <= 12 && current > 8) {
    div.style.transform = "translateX(-60.7%)"
    click = 2
  }
}

var prevBtn = document.querySelector(".slider1 > .prev-arr")
prevBtn.addEventListener("click", previewPrevSlide)

// small slider
let next = document.querySelector(".slider2 > .next")
let prev = document.querySelector(".slider2 > .prev")
let click = 0
next.addEventListener("click", function () {
  click++
  if (click > 1) {
    click = 1
  }

  if (click == 1) {
    div.style.transform = "translateX(-7.6%)"
  }
})

prev.addEventListener("click", function () {
  click--
  if (click < 0) {
    click = 0
  }

  if (click == 0) {
    div.style.transform = "translateX(-0%)"
  }
})

let frameImg1 = document.querySelector(".item-info .frame .frame-image1 img")
let frameImg2 = document.querySelector(".item-info .frame .frame-image2 img")
let img = document.querySelector(".slider1 img")
let copyImg
function addImage() {
  img.src = copyImg
}

frameImg2.addEventListener("mouseover", function () {
  copyImg = img.src
  img.src = frameImg2.src
  frameImg2.addEventListener("mouseout", addImage)
})

frameImg2.addEventListener("click", function () {
  frameImg2.removeEventListener("mouseout", addImage)
  frameImg2.parentElement.parentElement.setAttribute("class", "frame-img2")
  frameImg1.parentElement.parentElement.setAttribute("class", "frame-img1")
  previewNextSlide(0)
})

frameImg1.addEventListener("mouseover", function () {
  copyImg = img.src
  img.src = frameImg1.src
  frameImg1.addEventListener("mouseout", addImage)
})

frameImg1.addEventListener("click", function () {
  frameImg1.removeEventListener("mouseout", addImage)
  frameImg2.parentElement.parentElement.setAttribute("class", "frame-img1")
  frameImg1.parentElement.parentElement.setAttribute("class", "frame-img2")
  previewNextSlide(1)
})
let filterdiv = document.querySelectorAll(".filterDiv .dropDownContainer")
filterdiv[0].addEventListener("mouseover", function () {
  filterdiv[0].style.display = "block"
})
filterdiv[1].addEventListener("mouseover", function () {
  filterdiv[1].style.display = "block"
})
filterdiv[0].addEventListener("mouseout", function () {
  filterdiv[0].style.display = "none"
})
filterdiv[1].addEventListener("mouseout", function () {
  filterdiv[1].style.display = "none"
})
let dropDownHead = document.querySelectorAll(".filterDiv .dropDownHead")
dropDownHead[0].addEventListener("click", function () {
  filterdiv[0].style.display = "block"
})
dropDownHead[1].addEventListener("click", function () {
  filterdiv[1].style.display = "block"
})

let navi = 0
let Navi = document.querySelectorAll(".navigations > div")
let svg = document.querySelectorAll(".navigations > div > svg")
Navi[0].addEventListener("click", function () {
  if (navi != 0) {
    navi--
    var shopingInfo = document.querySelector(".shoping-info")
    if (navi == 0) {
      shopingInfo.style.transform = "translateY(-0px)"
    } else {
      shopingInfo.style.transform = "translateY(-485px)"
      svg[1].removeAttribute("id", "tips-inpsiration-chevron")
    }
  }
  if (navi <= 0) {
    navi = 0
    svg[0].setAttribute("id", "tips-inpsiration-chevron")
    svg[1].removeAttribute("id", "tips-inpsiration-chevron")
  }
})
Navi[1].addEventListener("click", function () {
  if (navi != 2) {
    navi++
    var shopingInfo = document.querySelector(".shoping-info")

    if (navi == 1) {
      shopingInfo.style.transform = "translateY(-485px)"
      svg[0].removeAttribute("id", "tips-inpsiration-chevron")
    } else {
      shopingInfo.style.transform = "translateY(-570px)"
    }
  }

  if (navi >= 2) {
    navi = 2
    svg[1].setAttribute("id", "tips-inpsiration-chevron")
    svg[0].removeAttribute("id", "tips-inpsiration-chevron")
  }
})

window.addEventListener("scroll", () => {
  var scrollable = 720
  var scrolled = window.scrollY
  console.log(scrolled)
  let ProductHeader = document.getElementById("Product-header")
  if (scrolled >= scrollable) {
    ProductHeader.style.display = "block"
  }
  if (scrolled < scrollable) {
    ProductHeader.style.display = "none"
  }
  let divs = document.querySelectorAll("#Product-header .anchor-box > div")
  if (scrolled < 1494) {
    divs.forEach((div) => {
      div.removeAttribute("id", "active-anchor-box")
    })
    divs[0].setAttribute("id", "active-anchor-box")
  } else if (scrolled < 3080) {
    divs.forEach((div) => {
      div.removeAttribute("id", "active-anchor-box")
    })
    divs[1].setAttribute("id", "active-anchor-box")
  } else if (scrolled < 4289) {
    divs.forEach((div) => {
      div.removeAttribute("id", "active-anchor-box")
    })
    divs[2].setAttribute("id", "active-anchor-box")
  } else if (scrolled > 4289) {
    divs.forEach((div) => {
      div.removeAttribute("id", "active-anchor-box")
    })
    divs[3].setAttribute("id", "active-anchor-box")
  }

  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", () => {
      divs.forEach((div) => {
        div.removeAttribute("id", "active-anchor-box")
      })
      divs[i].setAttribute("id", "active-anchor-box")
      if (i == 0) {
        window.scrollTo(0, 720)
      } else if (i == 1) {
        window.scrollTo(0, 1494)
      } else if (i == 2) {
        window.scrollTo(0, 3080)
      } else {
        window.scrollTo(0, 4289)
      }
    })
  }
})

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

// document.querySelector("#mobilePtn").innerHTML = mobileNav()
document.querySelector("#footerPut").innerHTML = footer()


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
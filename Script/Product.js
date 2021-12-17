var cart = JSON.parse(localStorage.getItem("Items")) || ""
console.log(cart)
// let imagesArr = [
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/5b192d3a8e8ea808001f00d803e7dcb8f7119b0d/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/c1dc8d57fced0f280f858d8313cc457a47907293/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/f1ad2500ef7a1d4d19797bd52ebe030f5c358d46/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/5c62873758b77c179517b6812908fdbb8a828c57/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/10a3a215b27fb8a0e6907497680bf6a31ac93d14/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/3397010c7f690a3f0aec545dac9064090ff11cf1/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/826a72957e43d5a4be68ff9730515fe3f1c7a378/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/dd0062388afe8240aa7c46ad29981e98664b6420/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/4fcffcffe7c2309bc91ebc89f1ebdd60c7dd67d0/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/ffc6b57bb49e826c42ed81abdf9a7c106f4163f7/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/b807b7beedf17fb0c717440ea3d20ad8b78d77ea/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/15e546a21fd1eaf36b1f153e8b749a88cdbb759f/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
//   "https://ak1.ostkcdn.com/images/products/is/images/direct/7e6aaafa09ac36340908d6643d7358cd2429d86d/Candace-Mid-Century-Modern-Fabric-Loveseat-by-Christopher-Knight-Home.jpg",
// ]
let imagesArr = [
  cart.imageURL,
  cart.img1,
  cart.img2,
  cart.img3,
  cart.img4,
  cart.img5,
]
document.getElementById("productImage").src = cart.imageURL
document.getElementById("img1p").src = cart.imageURL
document.getElementById("img2p").src = cart.img1
document.getElementById("img3p").src = cart.img2
document.getElementById("img4p").src = cart.img3
document.getElementById("img5p").src = cart.img4
document.getElementById("img6p").src = cart.img5
document.getElementById("maincatergory1").textContent = cart.main_catergory
document.getElementById("mainsubcatergory2").textContent =
  cart.main_sub_catergory
document.getElementById("subcatergory3").textContent = cart.sub_catergory
document.getElementById("catergory4").textContent = cart.catergory
document.getElementById("productName1").textContent = cart.name
document.getElementById(
  "productprice1"
).innerHTML = `<span>INR</span>${cart.price}<span>00</span>`
document.getElementById("colorImg1").src = imagesArr[0]
document.getElementById("colorImg2").src = imagesArr[1]

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
    div.style.transform = "translateX(-30.3%)"
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
    div.style.transform = "translateX(-30.3%)"
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
    div.style.transform = "translateX(-7.2%)"
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
  var scrollable = 190
  var scrolled = window.scrollY
  console.log(scrolled)
})
// import header from "/components/navbar.js"

// document.querySelector("#navPut").innerHTML = header()
import footer from "/components/footer.js"

document.querySelector("#footerPut").innerHTML = footer()

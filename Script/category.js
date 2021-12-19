var pageName = localStorage.getItem("pageName") || ""
var nn = pageName
console.log(nn)
fetch(`https://overstockapi.herokuapp.com/page/${pageName}`)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    var data = response
    console.log(data)
    document.getElementById("bimg").setAttribute("src", data.imgURL)
    document.getElementById("bimg1").setAttribute("src", data.imgURL)
    document.getElementById("pageName").textContent = data.pageName
    document.getElementById("offerCat").textContent = `Select ${data.pageName}*`
    document.getElementById(
      "heading2"
    ).textContent = `Popular ${data.pageName} Catergories`
    document.getElementById(
      "moreHeading"
    ).textContent = `Shop More ${data.pageName}`
    document
      .getElementById("buyGuideImg1")
      .setAttribute("src", data.imb1.imgUrl)
    document.getElementById("buyGuidetitle").textContent = data.imb1.title
    document.getElementById("buyGuidedesc").textContent = data.imb1.desc
    document
      .getElementById("buyGuideImg2")
      .setAttribute("src", data.imb2.imgUrl)
    document.getElementById("buyGuidetitle2").textContent = data.imb1.title
    document.getElementById("buyGuidedesc2").textContent = data.imb1.desc
    document.getElementById("text1").textContent = data.text1
    document.getElementById("text2").textContent = data.text2
    document.getElementById("text3").textContent = data.text3
    document.getElementById("text4").textContent = data.text4
    document.getElementById("img1").setAttribute("src", data.img1)
    document.getElementById("img2").setAttribute("src", data.img2)
    appendCategories(data.catergory)
    appendMoreCategories(data.moreCategory)
    setTimeout(function () {
      document.getElementById("loaderSS").style.display = "none"
      document.getElementById("compo").style.display = "block"
    }, 2000)
  })

var appendCategories = (data) => {
  data.forEach((item) => {
    let li = document.createElement("li")
    li.setAttribute("class", "featuredNavLi")
    let a = document.createElement("a")
    a.setAttribute("class", "featuredNavLiLink")
    a.setAttribute("href", "productsDisplay.html")
    a.textContent = item.name
    li.addEventListener("click", function (event) {
      event.preventDefault()
      var pageName = localStorage.getItem("productsPageName") || ""
      localStorage.setItem("productsPageName", item.name)
      console.log(item.name)
      window.location.href = "productsDisplay.html"
    })
    li.append(a)
    document.getElementById("listCat").append(li)
    let card = document.createElement("div")
    card.setAttribute("class", "popularCategoriesItem")
    card.addEventListener("click", function (event) {
      event.preventDefault()
      var pageName = localStorage.getItem("productsPageName") || ""
      localStorage.setItem("productsPageName", item.name)
      console.log(item.name)
      window.location.href = "productsDisplay.html"
    })
    let imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "popularCategoriesItemImgDiv")
    let img = document.createElement("img")
    img.setAttribute("src", item.imgUrl)
    img.setAttribute("class", "popularCategoriesItemImg")
    img.width = "400"
    img.height = "400"
    let titleDIv = document.createElement("div")
    titleDIv.setAttribute("class", "popularCategoriesItemText")
    titleDIv.textContent = item.name
    imgDiv.append(img)
    card.append(imgDiv, titleDIv)
    document.getElementById("catWithImg").append(card)
  })
}
var appendMoreCategories = (data) => {
  console.log(data)
  data.forEach((item) => {
    let card = document.createElement("div")
    card.setAttribute("class", "categoryCard")
    let a = document.createElement("a")
    a.setAttribute("href", "productsDisplay.html")
    a.setAttribute("class", "categoryCardLink")
    let imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "categoryCardImgDiv")
    let img = document.createElement("img")
    img.setAttribute("src", item.imgUrl)
    img.setAttribute("class", "categoryCardImg")
    let titleDIv = document.createElement("div")
    titleDIv.setAttribute("class", "categoryCardTitleDiv")
    let title = document.createElement("h3")
    title.setAttribute("class", "title-xs categoryCardTitle")
    title.textContent = item.name
    imgDiv.append(img)
    titleDIv.append(title)
    a.append(imgDiv, titleDIv)
    card.append(a)
    document.getElementById("moreCat").append(card)
  })
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
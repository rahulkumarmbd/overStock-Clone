var cart = JSON.parse(localStorage.getItem("CartOverStock")) || []
if (cart.length == 0) {
  window.location.href = "Product.html"
}
function sidebar(cart) {
  let totalPrice = 0
  for (let j = 0; j < cart.length; j++) {
    totalPrice += cart[j].price * cart[j].qty
  }
  let discount = totalPrice * 0.1
  let subTotal = totalPrice - discount
  localStorage.setItem("subtotal", Math.floor(subTotal) * 100)
  totalPrice = (Math.round(totalPrice * 100) / 100).toLocaleString()
  discount = (Math.round(discount * 100) / 100).toLocaleString()
  subTotal = (Math.round(subTotal * 100) / 100).toLocaleString()

  document.getElementById("itemValue1").textContent = `(${cart.length}) Item:`
  document.getElementById("itemValue2").textContent = `(${cart.length}) Item:`
  document.getElementById("itemTotalValue1").textContent = `INR ${totalPrice}`
  document.getElementById("itemTotalValue2").textContent = `INR ${totalPrice}`
  document.getElementById(
    "itemDiscountValue1"
  ).textContent = `- INR ${discount}`
  document.getElementById(
    "itemDiscountValue2"
  ).textContent = `- INR ${discount}`
  document.getElementById("itemSubTotalValue1").textContent = `INR ${subTotal}`
  document.getElementById("itemSubTotalValue2").textContent = `INR ${subTotal}`
  document.getElementById("itemFinalValue1").textContent = `INR ${subTotal}`
  document.getElementById("itemFinalValue2").textContent = `INR ${subTotal}`
  const loginCheck = localStorage.getItem("loginCheck")
  document.getElementById("checkOutBtn1").addEventListener("click", () => {
    if (loginCheck === "true") {
      window.location.href = "checkout.html"
    } else {
      window.location.href = "signup.html"
    }
  })
  document.getElementById("checkOutBtn2").addEventListener("click", () => {
    if (loginCheck === "true") {
      window.location.href = "checkout.html"
    } else {
      window.location.href = "signup.html"
    }
  })
}
let displayItems = () => {
  console.log(cart[0])
  sidebar(cart)

  cart.forEach((item, index) => {
    var oe = document.createElement("div")
    oe.setAttribute("class", "oe")
    var og = document.createElement("div")
    og.setAttribute("class", "og")
    var ou = document.createElement("div")
    ou.setAttribute("class", "ou")
    var ow = document.createElement("img")
    ow.setAttribute("class", "ow")
    ow.setAttribute("src", item.imgURL)
    ou.append(ow)
    var oy = document.createElement("div")
    oy.setAttribute("class", "oy pr")
    var pa = document.createElement("div")
    pa.setAttribute("class", "pa pr")
    var a = document.createElement("a")
    a.textContent = item.name
    pa.append(a)
    var pf = document.createElement("div")
    pf.setAttribute("class", "pf")
    var pj = document.createElement("div")
    var n = item.price
    var oldPrice = n + n * 0.1
    pj.setAttribute("class", "ph pj")
    var pp = document.createElement("div")
    pp.setAttribute("class", "ph pp")
    n = (Math.round(n * 100) / 100).toLocaleString()
    oldPrice = (Math.round(oldPrice * 100) / 100).toLocaleString()
    pj.textContent = `INR ${oldPrice}`
    pp.textContent = `Sale INR ${n}`
    var jv = document.createElement("div")
    jv.textContent = "10% Savings"
    pf.append(pj, pp, jv)
    var oi = document.createElement("div")
    oi.setAttribute("class", "oi")
    var iw = document.createElement("div")
    iw.setAttribute("class", "cl-form-control cl-form-control-margin iw")
    var label = document.createElement("label")
    label.setAttribute("class", "cl-form-label")
    label.textContent = "Qty"
    var select = document.createElement("Select")
    // select.setAttribute("disabled", "")
    var seloption = document.createElement("option")
    seloption.setAttribute("label", item.qty)
    ///Debugging..
    var option1 = document.createElement("option")
    option1.setAttribute("value", "1")
    let val1 = document.createTextNode("1")
    option1.appendChild(val1)

    var option2 = document.createElement("option")
    option2.setAttribute("value", "2")
    let val2 = document.createTextNode("2")
    option2.appendChild(val2)

    var option3 = document.createElement("option")
    option3.setAttribute("value", "3")
    let val3 = document.createTextNode("3")
    option3.appendChild(val3)

    var option4 = document.createElement("option")
    option4.setAttribute("value", "4")
    let val4 = document.createTextNode("4")
    option4.appendChild(val4)

    var option5 = document.createElement("option")
    option5.setAttribute("value", "5")
    let val5 = document.createTextNode("5")
    option5.appendChild(val5)

    var option6 = document.createElement("option")
    option6.setAttribute("value", "6")
    let val6 = document.createTextNode("6")
    option6.appendChild(val6)

    var option7 = document.createElement("option")
    option7.setAttribute("value", "7")
    let val7 = document.createTextNode("7")
    option7.appendChild(val7)

    var option8 = document.createElement("option")
    option8.setAttribute("value", "8")
    let val8 = document.createTextNode("8")
    option8.appendChild(val8)

    var option9 = document.createElement("option")
    option9.setAttribute("value", "9")
    let val9 = document.createTextNode("9")
    option9.appendChild(val9)

    var option10 = document.createElement("option")
    option10.setAttribute("value", "10")
    let val10 = document.createTextNode("10")
    option10.appendChild(val10)

    var option11 = document.createElement("option")
    option11.setAttribute("value", "11")
    let val11 = document.createTextNode("11")
    option11.appendChild(val11)

    var option12 = document.createElement("option")
    option12.setAttribute("value", "12")
    let val12 = document.createTextNode("12")
    option12.appendChild(val12)

    var option13 = document.createElement("option")
    option13.setAttribute("value", "13")
    let val13 = document.createTextNode("13")
    option13.appendChild(val13)

    var option14 = document.createElement("option")
    option14.setAttribute("value", "14")
    let val14 = document.createTextNode("14")
    option14.appendChild(val14)

    var option15 = document.createElement("option")
    option15.setAttribute("value", "15")
    let val15 = document.createTextNode("15")
    option15.appendChild(val15)

    var option16 = document.createElement("option")
    option16.setAttribute("value", "16")
    let val16 = document.createTextNode("16")
    option16.appendChild(val16)

    var option17 = document.createElement("option")
    option17.setAttribute("value", "17")
    let val17 = document.createTextNode("17")
    option17.appendChild(val17)

    var option18 = document.createElement("option")
    option18.setAttribute("value", "18")
    let val18 = document.createTextNode("18")
    option18.appendChild(val18)

    var option19 = document.createElement("option")
    option19.setAttribute("value", "19")
    let val19 = document.createTextNode("19")
    option19.appendChild(val19)

    var option20 = document.createElement("option")
    option20.setAttribute("value", "20")
    let val20 = document.createTextNode("20")
    option20.appendChild(val20)
    ///----------------------the end --------------------------------//
    select.append(
      seloption,
      option1,
      option2,
      option3,
      option4,
      option5,
      option6,
      option7,
      option8,
      option9,
      option10,
      option11,
      option12,
      option13,
      option14,
      option15,
      option16,
      option17,
      option18,
      option19,
      option20
    )

    select.addEventListener("change", function (event) {
      let qty1 = event.target.value
      for (var i = 0; i < cart.length; i++) {
        if (i == index) {
          cart[i].qty = qty1
        }
      }
      localStorage.setItem("CartOverStock", JSON.stringify(cart))
      sidebar(cart)
      // window.location.href = "cart.html"
    })
    iw.append(label, select)
    var ok = document.createElement("div")
    ok.setAttribute("class", "ok")
    var om = document.createElement("a")
    om.setAttribute("class", "om")
    om.textContent = "Remove"
    om.addEventListener("click", function () {
      console.log("hello")
      console.log(index)
      removeItem(index)
      window.location.href = "cart.html"
    })
    var om1 = document.createElement("a")
    om1.setAttribute("href", "")
    om1.textContent = "Save For Later"
    om1.setAttribute("class", "om")
    ok.append(om, om1)
    oi.append(iw, ok)
    oy.append(pa, pf, oi)
    og.append(ou, oy)
    oe.append(og)
    document.getElementById("productContainer").append(oe)
  })
  setTimeout(function () {
    document.getElementById("loaderSS").style.display = "none"
    document.getElementById("compo").style.display = "block"
  }, 1000)
}

displayItems()

function removeItem(index) {
  console.log(index)
  cart.splice(index, 1)
  localStorage.setItem("CartOverStock", JSON.stringify(cart))
  if (cart.length === 0) {
    window.location.href = "productsDisplay.html"
  } else {
    window.location.href = "index.html"
  }
  displayItems()
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

for (let i = 0; i < 13; i++) {
  let sectionDiv = document.querySelectorAll(".section-div > div")
  sectionDiv[i].addEventListener("mouseover", function () {
    let dropDownContainer = document.querySelectorAll(".dropdown-content-part")
    dropDownContainer[i].style.display = "flex"
  })
  sectionDiv[i].addEventListener("mouseout", function () {
    let dropDownContainer = document.querySelectorAll(".dropdown-content-part")
    dropDownContainer[i].style.display = "none"
    dropDownContainer[i].addEventListener("mouseover", function () {
      dropDownContainer[i].style.display = "flex"
    })
    dropDownContainer[i].addEventListener("mouseout", function () {
      dropDownContainer[i].style.display = "none"
    })
  })
}

// let mains = document.querySelectorAll(".dropdown-content-part > div > div > div");
// for(let i=0; i<mains.length; i++){
//   mains[i].addEventListener("click",function(){
//     console.log(mains[i].textContent);
//     localStorage.setItem("Items",mains[i].textContent);
//     window.location.href = "productsDisplay.html";
//   })
// }

let sectionDiv = document.querySelectorAll(".section-div > div")
for (let i = 0; i < sectionDiv.length; i++) {
  sectionDiv[i].addEventListener("click", function () {
    console.log(sectionDiv[i].textContent)
    localStorage.setItem("pageName", sectionDiv[i].textContent)
    window.location.href = "category.html"
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

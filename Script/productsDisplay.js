var pageName = localStorage.getItem("productsPageName") || ""
var nn = pageName
console.log(nn)

var cart = JSON.parse(localStorage.getItem("Items")) || {}

document.getElementById("headingResult").textContent = nn
fetch(`https://overstockapi.herokuapp.com/products/category=${nn}`)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    var data = response
    console.log(data)
    appendCard(data)
  })
fetch(`https://overstockapi.herokuapp.com/products/mainSubCategory=${nn}`)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    var data = response
    console.log(data)
    appendCard(data)
  })

var appendCard = (data) => {
  data.forEach((item) => {
    let productCardContainer = document.createElement("div")
    productCardContainer.setAttribute("class", "productCardContainer")
    let div = document.createElement("div")
    let productCardLink = document.createElement("a")
    productCardLink.setAttribute("class", "productCardLink")
    let productCard = document.createElement("div")
    productCard.setAttribute("class", "productCard")
    let productCardFrontMain = document.createElement("div")
    productCardFrontMain.setAttribute("class", "productCardFrontMain")
    let productCardInfoBannerContainer = document.createElement("div")
    productCardInfoBannerContainer.setAttribute(
      "class",
      "productCardInfoBannerContainer"
    )
    let tapcontainer = document.createElement("div")
    tapcontainer.setAttribute("class", "tap-container")
    let wishlistFavContainerNew = document.createElement("div")
    wishlistFavContainerNew.setAttribute("class", "wishlistFavContainerNew")
    let wishlistHeart = document.createElement("img")
    wishlistHeart.setAttribute(
      "src",
      "https://i.postimg.cc/W3cWM2Xg/Add-to-Wishlist.png"
    )
    wishlistHeart.setAttribute("class", "wishlistHeart")
    let wishlistCount = document.createElement("div")
    wishlistCount.setAttribute("class", "wishlistCount")
    wishlistCount.innerText = `${Math.floor(
      Math.random() * (110 - 250) + 250
    )} K`
    wishlistFavContainerNew.append(wishlistHeart, wishlistCount)
    tapcontainer.append(wishlistFavContainerNew)
    let div2 = document.createElement("div")
    productCardInfoBannerContainer.append(div2, tapcontainer)
    let productCardFrontImageContainer = document.createElement("div")
    productCardFrontImageContainer.setAttribute(
      "class",
      "productCardFrontImageContainer"
    )
    let productCardFrontImage = document.createElement("img")
    productCardFrontImage.setAttribute("class", "productCardFrontImage")
    productCardFrontImage.width = "320"
    productCardFrontImage.height = "320"
    productCardFrontImage.setAttribute("src", item.imageURL)
    productCardFrontImageContainer.append(productCardFrontImage)
    productCardFrontMain.append(
      productCardInfoBannerContainer,
      productCardFrontImageContainer
    )
    let productCardInfoBarContainerWithTitle = document.createElement("div")
    productCardInfoBarContainerWithTitle.setAttribute(
      "class",
      "productCardInfoBarContainerWithTitle"
    )
    let priceRatingTitle = document.createElement("div")
    priceRatingTitle.setAttribute("class", "priceRatingTitle")
    let productPricing = document.createElement("div")
    productPricing.setAttribute("class", "productPricing _2DfMCJ")
    let productPricingCurrent = document.createElement("div")
    productPricingCurrent.setAttribute(
      "class",
      "productPricingCurrent _3MUO5L wzKvpP"
    )
    productPricingCurrent.textContent = `INR ${item.price}`
    productPricing.append(productPricingCurrent)
    let ratingsWrapper = document.createElement("div")
    ratingsWrapper.setAttribute("class", "ratingsWrapper")
    let rate2 = 0
    let rate = Math.floor(item.rating)
    rate2 = item.rating - Math.floor(item.rating)
    console.log(rate2)
    for (var i = 0; i < rate; i++) {
      var ratingsStars = document.createElement("img")
      ratingsStars.setAttribute(
        "src",
        "https://i.postimg.cc/43bGzWp3/svgexport-16.png"
      )
      ratingsStars.setAttribute("class", "ratingsStars")
      ratingsWrapper.append(ratingsStars)
    }
    if (rate2 !== 0) {
      var ratingsStars2 = document.createElement("img")
      ratingsStars2.setAttribute(
        "src",
        "https://i.postimg.cc/kM2dXQfL/svgexport-18.png"
      )
      ratingsStars2.setAttribute("class", "ratingsStars")
      ratingsWrapper.append(ratingsStars2)
    }
    let productCardFrontTitle = document.createElement("p")
    productCardFrontTitle.setAttribute("class", "productCardFrontTitle")
    productCardFrontTitle.textContent = item.name
    priceRatingTitle.append(
      productPricing,
      ratingsWrapper,
      productCardFrontTitle
    )
    productCardInfoBarContainerWithTitle.append(priceRatingTitle)
    productCard.append(
      productCardFrontMain,
      productCardInfoBarContainerWithTitle
    )
    productCardLink.append(productCard)
    div.append(productCardLink)
    productCardContainer.append(div)
    productCardContainer.addEventListener("click", function (event) {
      event.preventDefault()
      localStorage.setItem("Items", JSON.stringify(item))
      window.open("Product.html")
    })

    document.getElementById("displayCard").append(productCardContainer)
  })
}

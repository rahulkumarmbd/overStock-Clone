const cart = []

async function loadCart(params) {
  localStorage.setItem("CartOverStock", JSON.stringify(cart))

  let userData = JSON.parse(localStorage.getItem("CartOverStock"))
  let email = localStorage.getItem("userEmail")
  let cartData = {
    userData: userData,
    email: email,
  }

  cartData = JSON.stringify(cartData)
  let login_api = `https://overstock-2.herokuapp.com/cart`

  //fetch request

  let response = await fetch(login_api, {
    method: "POST",
    body: cartData,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

loadCart()

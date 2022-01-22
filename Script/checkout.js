// document.querySelector("form").addEventListener("submit", function(e) {
       
//     e.preventDefault()
    
//     var name = document.getElementById("name").value
//     var cardNo = document.getElementById("card_number").value
//     var expiry = document.getElementById("exp_date").value
//     var cvv = document.getElementById("cvv").value
//     var valid = true;

//     if (cardNo != 12345) {
//         document.getElementById("alert-card").textContent = "Card No. is wrong"
//         document.getElementById("alert-card").style.color = "red"
//         document.getElementById("card_number").style.border = "1px solid red"
//         valid = false
//     } else {
//         document.getElementById("alert-card").textContent = ""
//         document.getElementById("card_number").style.border = "none"
//         valid = true
//     }

//     if (expiry != "01/30") {
//         document.getElementById("alert-expiry").textContent = "Card Expiry Date is wrong"
//         document.getElementById("alert-expiry").style.color = "red"
//         document.getElementById("exp_date").style.border = "1px solid red"
//         valid = false
//     } else {
//         document.getElementById("alert-expiry").textContent = ""
//         document.getElementById("exp_date").style.border = "none"
//         valid = true
//     }

//     if (cvv != 000) {
//         document.getElementById("alert-cvv").textContent = "CVV is wrong"
//         document.getElementById("alert-cvv").style.color = "red"
//         document.getElementById("cvv").style.border = "1px solid red"
//         valid = false
//     } else {
//         document.getElementById("alert-cvv").textContent = ""
//         document.getElementById("cvv").style.border = "none"
//         valid = true
//     }

//     if (name != "Abhishek") {
//         document.getElementById("alert-name").textContent = "Card Holder name is wrong"
//         document.getElementById("alert-name").style.color = "red"
//         document.getElementById("name").style.border = "1px solid red"
//         valid = false
//     } else {
//         document.getElementById("alert-name").textContent = ""
//         document.getElementById("name").style.border = "none"
//         valid = true
//     }

//     if (valid == true) {
//         window.location.href = ""
//     }

// })

document.querySelector(".button").addEventListener("click",function(){

    checkAddress()

})


 let checkAddress = ()=>{
     
 let checkValue = "true";
     billingAddressData = {

        email: document.getElementById("email").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        company: document.getElementById("company").value,
        taxId: document.getElementById("taxId").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        country: document.getElementById("country").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipcode: document.getElementById("zipcode").value,
        phone: document.getElementById("phone").value,
     }

     for (key in billingAddressData){
         if (billingAddressData[key] == ""){
             if (key == "email" || key == "firstName" || key == "lastName" || key == "address1" ||
                  key == "country" || key == "city" || key == "phone"){
                      alert(`${key} is Required`);
                      checkValue = "false"
                      break;
                  }
            }
     }
     if (checkValue != "false"){
        checkAddress2();

     }

 }


 let checkAddress2 = () => {
    let checkValue2 = "true";
    billingAddressData = {

        email: document.getElementById("email2").value,
        firstName: document.getElementById("firstName2").value,
        lastName: document.getElementById("lastName2").value,
        company: document.getElementById("company2").value,
        taxId: document.getElementById("taxId2").value,
        address1: document.getElementById("address12").value,
        address2: document.getElementById("shipping_address22").value,
        country: document.getElementById("country2").value,
        city: document.getElementById("city2").value,
        state: document.getElementById("state2").value,
        zipcode: document.getElementById("zipcode2").value,
        phone: document.getElementById("phone2").value,
     }

     for (key in billingAddressData){
         if (billingAddressData[key] == ""){
             if (key == "email" || key == "firstName" || key == "lastName" || key == "address1" ||
                  key == "country" || key == "city" || key == "phone"){
                      alert(`${key} is Required`);
                      checkValue2 = "false"
                    return;
                  }
            }
     }
     if (checkValue2 != "false"){
        checkPaymentDetails();
     }
 }

 
 let checkPaymentDetails = () => {
    let checkValue3 = "true";

     let paymentDetails = {
            card_type: document.getElementById("card_type").value,
            name: document.getElementById("name").value,
            exp_date: document.getElementById("exp_date").value,
            cvv: document.getElementById("cvv").value,
     }

     for (key in paymentDetails){
         console.log(1)
         if (paymentDetails[key] == ""){
             alert (`${key} is required for Payment`);
             checkValue3 = "false";
             console.log(1)
             return;
         }
     }
     console.log(1)
     if (checkValue3 != "false"){
         console.log(1)
         if (paymentDetails.name == "abhi" && paymentDetails.cvv == 123){
            //  alert("Not valid Credentials")
            localStorage.clear();
            window.location.href = "congr.html"
         } else {
             
         }
     }
 }

 const amount = localStorage.getItem("subtotal") || 0
 amount = Number(amount)

 async function rz() {
   const data = {
     amount: amount,
   }

   let url = "https://overstock-2.herokuapp.com/razorpay"

   let response = await fetch(url, {
     method: "POST",
     body: JSON.stringify(data),
     headers: {
       "Content-Type": "application/json",
     },
   })
   let d = await response.json()
   console.log(d)

   var options = {
     key: "rzp_test_kqeHDKDTMlfKMR", // Enter the Key ID generated from the Dashboard
     name: "Overstock",
     description: d.id,
     image:
       "https://overstock-clone.s3.ap-south-1.amazonaws.com/4a845da84a93db30e2830315562ffbb4c700b0f1af9fe3922cab9779693b5d63_200.jpg",
     order_id: d.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
     callback_url: "https://overstock-2.herokuapp.com/razorpay/success",
     notes: {
       address: "Razorpay Corporate Office",
     },
     theme: {
       color: "#FD2835",
     },
   }
   var rzp1 = new Razorpay(options)
   rzp1.open()
   e.preventDefault()

   const cart = []

   localStorage.setItem("CartOverStock", JSON.stringify(cart))
 }
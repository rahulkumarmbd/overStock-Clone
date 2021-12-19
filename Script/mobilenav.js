let MobileEvent = document.querySelectorAll(".MobileEvent");

for (let i = 0; i < MobileEvent.length; i++) {
    MobileEvent[i].addEventListener("click", function () {
        let MobileEventText = document.querySelectorAll(".MobileEvent > span")
        localStorage.setItem("pageName", MobileEventText[i].textContent)
        console.log(MobileEventText[i].textContent);
        window.location.href = "category.html"
    })
    
}
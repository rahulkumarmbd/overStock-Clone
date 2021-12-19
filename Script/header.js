
for(let i=0; i<13; i++){
    let sectionDiv = document.querySelectorAll(".section-div > div");
    // console.log(sectionDiv)
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

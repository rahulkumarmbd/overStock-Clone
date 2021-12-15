function responsivewatchSlider() {
  var slideList = document.querySelector(".slider");

  var count = 1;
  var click = 5;
  var size = document.querySelector(".slider").offsetWidth;
  if (size < 998) {
    click = 7;
  }
  if (count == 1) {
    document.getElementById("prevwatch").style.opacity = 0.5;
    document.getElementById("prevwatch").style.display = "hidden";
  }
  console.log(size);
  function prevwatchSlide() {
    if (count == 2) {
      document.getElementById("prevwatch").style.opacity = 0.5;
    }
    if (count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("nextwatch").style.opacity = 1;

      count++;
    } else {
      document.getElementById("prevwatch").style.opacity = 0.5;
      document.getElementById("prevwatch").style.display = "hidden";
    }
  }
  function nextwatchSlide() {
    if (count == click - 1) {
      document.getElementById("nextwatch").style.opacity = 0.5;
      document.getElementById("nextwatch").style.display = "hidden";
    }
    if (count < click) {
      slideList.style.left = "-" + count * 31 + "rem";

      document.getElementById("prevwatch").style.opacity = 1;
      count++;
    } else {
      document.getElementById("nextwatch").style.opacity = 0.5;
      document.getElementById("nextwatch").style.display = "hidden";
    }
  }
  document
    .getElementById("prevwatch")
    .addEventListener("click", prevwatchSlide);
  document
    .getElementById("nextwatch")
    .addEventListener("click", nextwatchSlide);
}

responsivewatchSlider();

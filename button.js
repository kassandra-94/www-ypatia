function myFunction(e) {
  e = e || window.event;
  var buttonClicked = e.target || e.srcElement;
  var cardTextElem = target.parentNode.querySelector(".card-text");
  var dots = cardTextElem.querySelector(".dots");
  var moreText = cardTextElem.querySelector(".more");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      target.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      target.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
/*
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
*/

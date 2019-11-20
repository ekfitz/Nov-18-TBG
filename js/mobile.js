document.body.onload = setMobile;
window.addEventListener("resize", setMobile);

function setMobile() {
  var w = window.innerWidth;

  if (w > 1000) {
    window.location.replace("index.html");
  }
}

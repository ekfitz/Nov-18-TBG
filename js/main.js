//document.body.onload = setMobile;
//window.addEventListener("resize", setMobile);

var menu = document.getElementById("menu");
var page1 = document.getElementById("page1");
var gui1 = document.getElementById("gui1");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var page2 = document.getElementById("page2");

menu.className = "material-icons";
page1.className = "page1";
gui1.className = "gui1";
nav1.className = "nav";
nav2.className = "nav";
nav3.className = "nav";
page2.className = "page2";
nav1.innerHTML = "Press";
nav2.innerHTML = "Studio";
nav3.innerHTML = "About";

//nav1.onclick = goPress;

function goPress() {
  window.location.href = "press.html";
}

function setMobile() {
  var w = window.innerWidth;

  if (w < 1000) {
    window.location.replace("mobile.html");
  }
}

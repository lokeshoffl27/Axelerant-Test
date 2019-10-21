import "./sass/styles.scss";
import "./js/index.js";
function navFunc() {
  var x = document.getElementById("mynav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

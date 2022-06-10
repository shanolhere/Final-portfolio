const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll(".navlink");

hamburger.addEventListener("click", openMenu);

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Hightlight the active/current navlinks

var navUl = document.getElementById("nav-ul");
var links = navUl.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

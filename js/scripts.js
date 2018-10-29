const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

function toggleMenu(){
  console.log("called toggleMenu");
  menuNav.classList.toggle("menu-toggle")
  menuToggle.classList.toggle("test")

}

menuToggle.addEventListener("click" , toggleMenu);

// ===================== Dark Theme ====================
let theme = localStorage.getItem("theme")
const themeBtn = document.getElementById("light")


if (theme === "dark-theme") {
  document.body.classList.add("dark-theme")
}

themeBtn.onclick = function () {
  if (theme === "dark-theme") {
    localStorage.setItem("theme", "light-theme");
    document.body.classList.remove("dark-theme")
    theme = "light-theme"

  }

  else {
    localStorage.setItem("theme", "dark-theme");
    document.body.classList.add("dark-theme")
    theme = "dark-theme"
  }
};


// -----------------------Narvebar open and close---------------
var sidemenu = document.querySelector(".narve-middle")

function open1menu() {
sidemenu.style.right = '0'
}


function close1menu() {
sidemenu.style.right = '-100%'
}
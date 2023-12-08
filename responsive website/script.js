var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "160px"
    }
    else {
        menuList.style.maxHeight = "0px"
    }
}

var icon = document.getElementById("icon");
var menu = document.getElementById("menu");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./images/sun.png"
        menu.src = "./images/menudark.png"

    } else {
        icon.src = "images/moon.png"
        menu.src = "./images/menu.png"
    }
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };



function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



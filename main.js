function scrollContact(){
    window.scrollTo(0, 9999);
}

function scrollService(){
    window.scrollTo(0, 2800);
}

function showSideMenu(){
    if (sidemenu.style.marginLeft == "0px"){
        sidemenu.style.marginLeft = "-200px";
        menu.className = "fa fa-bars";
    }
    else{
        sidemenu.style.marginLeft = "0";
        menu.className = "fa fa-times";
    }
    sidemenu.style.transition = "0.3s ease";
}

let items = document.querySelectorAll(".item");
let itemnames = document.querySelectorAll(".itemname");
let picColors = ["yellow", "green", "red", "orange"]
let nameColors = ["gold", "lightgreen", "brown", "tomato"]
let index = 0;
function arrowRight(){
    index++;
    for(let i = 0; i < items.length; i++){
        items[i].style.backgroundColor = picColors[index];
        itemnames[i].style.backgroundColor = nameColors[index];
    }
    if (index > picColors.length - 1) {
        index = picColors.length - 1;
    }
}

function arrowLeft(){
    index--;
    for(let i = 0; i < items.length; i++){
        items[i].style.backgroundColor = picColors[index];
        itemnames[i].style.backgroundColor = nameColors[index];
    }
    if (index < 0) {
        index = 0;
    }
}
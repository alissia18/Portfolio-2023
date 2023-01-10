window.onload = function(){
    
}

function openingFunction(){

    var homeContainer = document.getElementById("home-container");
    var navContainer = document.getElementById("nav-container");
    var elements = document.getElementsByClassName("nav-item");
    toggleClass(homeContainer, "home-gone");
    setTimeout(hideElement, 1800,homeContainer);
    setTimeout(toggleClass,500,navContainer,"nav-arrive");
    navContainer.style.translate = "0vw";
    setTimeout(startAnimations,2200,elements);
}

function hideElement(e){
    e.style.display = "none";
    e.visibility = "hidden";
}

function toggleClass(e, c) {
    e.classList.toggle(c);
}

function startAnimations(elements){
    for(i = 0; i < elements.length; i++){
        if(elements[i].classList.contains("up")){
            elements[i].classList.toggle("up-appear");
            elements[i].classList.toggle("up");
        } else {
            elements[i].classList.toggle("down-appear");
            elements[i].classList.toggle("down");
        }
        resetTransform(elements[i]);
        
    }
}

function resetTransform(e){
    e.style.transform = "translateY(0vh)";
    console.log(e.style.transform);
}

var loadVariable;

function loadFunction(){
    console.log("load function");
    loadVariable = setTimeout(showContents, 3000);
}

function showContents(){
    console.log("show contents");
    document.getElementById("loader").style.display = "none";
    document.getElementById("home-container").style.display = "flex";
}

function menuActivate(x){
    x.classList.toggle("change");
    var y = document.getElementById("navigation");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }
// Proportional Scaling
let wrapper = document.getElementById("wrapper");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let root = document.querySelector(':root');

function dimensions() {
    
    var scale;
    
    if (window.innerWidth >= window.innerHeight) {
        scale = Math.min(
            window.innerWidth / 704,    
            window.innerHeight / 404,
            2
        );
    } else {
        scale = Math.min(
            window.innerWidth / 404,    
            window.innerHeight / 704
        );
    }
    
    root.style.setProperty('--scale', scale);
    root.style.setProperty('--height', window.innerHeight + "px");
}

// Carousel
var slidePosition = 1;
var slide = document.getElementsByClassName("card");

function firstSlide() {
    slide[slidePosition-1].style.transform = "rotateY(+180deg)";
    slideShow(slidePosition = 1);
}

function plusSlide(n) {
  if ((slidePosition + n) > slidePosition) {
      slide[slidePosition-1].style.transform = "rotateY(-180deg)";
  } else {
      slide[slidePosition-1].style.transform = "rotateY(+180deg)";
  }
  slideShow(slidePosition += n);
}

function slideShow(n) {
    var i;
    if (slidePosition == 1) {
        previous.style.visibility = "hidden";
    } else {
        previous.style.visibility = "visible";
    }
    if (slidePosition == slide.length) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
    }
    slide[slidePosition-1].style.transform = "rotateY(0deg)";
}

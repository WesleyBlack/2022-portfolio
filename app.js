// Proportional Scaling
let wrapper = document.getElementById("wrapper");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let root = document.querySelector(':root');

function dimensions() {
    
    function test(){
    var ratio = window.devicePixelRatio;            
    settings = ratio-window.innerHeight; 
    console.log("NEW TITLE BAR HEIGHT: " + settings);
};
    test()
    
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


// Rescaling fix for mobile safari when changing orientation
const mediaQuery = window.matchMedia('(orientation:landscape)')

function handleOrientationChange(e) {
    if (e.matches) {
       function loop(i) {
           if (i < 0) return;
           setTimeout(function () {
               dimensions();
               loop(--i);
           }, 1);
       }
       loop(100);
    } else {
       setTimeout(dimensions, 340);
   }
 }

mediaQuery.addListener(handleOrientationChange)


// Carousel
var slidePosition = 1;
var slide = document.getElementsByClassName("card");

function firstSlide() {
    slide[slidePosition-1].style.transform = "rotateY(+180deg)";
    slide[slidePosition-1].style.pointerEvents = "none";
    for (let i = slidePosition; i > 2; i--) {
        slide[slidePosition=i-2].style.transitionDuration = "0s";
        slide[slidePosition=i-2].style.transform = "rotateY(+180deg)";
        setTimeout(function(){ slide[slidePosition=i-2].style.visibility = "hidden"; }, 1000);
    }
    slideShow(slidePosition = 1);
}

function plusSlide(n) {
  if ((slidePosition + n) > slidePosition) {
      slide[slidePosition].style.transitionDuration = "1s";
      slide[slidePosition-1].style.transform = "rotateY(-180deg)";
      slide[slidePosition-1].style.pointerEvents = "none";
      setTimeout(function(){ slide[slidePosition-2].style.visibility = "hidden"; }, 1000);
  } else {
      slide[slidePosition-1].style.transform = "rotateY(+180deg)";
      slide[slidePosition-1].style.pointerEvents = "none";
      setTimeout(function(){ slide[slidePosition].style.visibility = "hidden"; }, 1000);
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
    slide[slidePosition-1].style.pointerEvents = "auto";
    slide[slidePosition-1].style.visibility = "visible";
}

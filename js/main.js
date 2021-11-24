  /* LANDING ANIMATION */
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




//!  NAVBAR ON SCROLL 
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 500) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});

//!NAVBAR 



var dark = document.querySelector('nav');
dark.addEventListener('scroll', () => {
    dark.style.backgroundColor = "rgba(219, 215, 171, 0.993)";
});

//! DARKEN NAVBAR ON SCROLL 
// *PRODUCT FILTERS
let men = document.querySelector('#inlineCheckbox1');
let women = document.querySelector('#inlineCheckbox2');

let allProducts = document.querySelectorAll('#product');
let mensProducts = document.querySelectorAll('#productMen');
let womenProducts = document.querySelectorAll('#productWomen');



// *PRODUCT FILTERS
let allProducts = document.querySelectorAll('#product');
let mensProducts = document.querySelectorAll('#productMen');
let womenProducts = document.querySelectorAll('#productWomen');

let selectMen = document.querySelector('#inlineCheckbox1');
let selectWomen = document.querySelector('#inlineCheckbox2');

// TRIAL
let MEN = document.querySelector('#MENS');
let WOMEN = document.querySelector('#WOMENS');

selectMen.addEventListener('change', function(){
  console.log('men selected');
  if(this.checked){
    WOMEN.className = 'd-none';
  } else{
    WOMEN.classList.remove('d-none');
  }
});
selectWomen.addEventListener('change', function(){
  console.log('women selected');
  if(this.checked){
    MEN.className = 'd-none';
  } else{
    MEN.classList.remove('d-none');
  }
});

// # SMOOTH SCROLL
window.addEventListener('scroll',() => {
    const scrolled = window.scrollY;
    console.log("scrolled");
} );

// # SMOOTH SCROLL END

//!BORDER FOR PRODUCT CARDS



//!BORDER FOR PRODUCT CARDS END








//* SCROLL TO TOP START
const scrollBtn = document.querySelector(".scroll-to-top");


scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

//* SCROLL TO TOP END




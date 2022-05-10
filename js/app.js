// toggle for mobile menu

const ham = document.getElementById("ham");
const mobileNav = document.getElementById("mobile-nav");
const overlayEffect = document.getElementById("overlay");
const main = document.querySelector("main");

ham.addEventListener("click", () => {
  mobileNav.classList.toggle("show-nav");
  overlayEffect.classList.toggle("show-overlay");
  main.classList.toggle("main-overlay");
});

// //blob rotation when screen size is a certain width
// const blob = document.getElementById("blob");
// const body = document.querySelector("body");

// function rotation() {
//   if (window.innerWidth > 768) {
//     blob.classList.add("rotation");
//   } else {
//     blob.classList.remove("rotation");
//   }
// }

// window.onresize = rotation;
// rotation();

// // intersection observer - changes the background color of the nav afer scrolling past a certain point
// const nav = document.querySelector("nav");
// const sectionOne = document.querySelector(".hero__content");

// const sectionOneOptions = {};

// const sectionOneObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       nav.classList.add("nav-scrolled");
//     } else {
//       nav.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

//photography genre type display when hover

    // various background colors
let portraitColor = '#E8CDDA';
let autoColor = '#AF4546';
let productColor = '#B1AFAA';
let fashionColor = '#D2A97C';
let interiorColor = '#9F8E74';

    //grid items
const portraitGrid = document.getElementsByClassName('portrait');
const automotiveGrid = document.getElementsByClassName('automotive');
const productGrid = document.getElementsByClassName('product');
const fashionGrid = document.getElementsByClassName('fashion');
const interiorGrid = document.getElementsByClassName('interior');

const portfolioWrapper = document.getElementById('portfolio');

portraitGrid.addEventListener('mouseenter', () =>{

});

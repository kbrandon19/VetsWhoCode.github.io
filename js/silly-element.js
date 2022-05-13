//photography genre type display when hover

// various background colors
let defaultColor = "#ffffff";
let portraitColor = "#E8CDDA";
let autoColor = "#AF4546";
let productColor = "#B1AFAA";
let fashionColor = "#D2A97C";
let interiorColor = "#9F8E74";

//grid items
const portraitGrid = document.getElementsByClassName("portrait");
const automotiveGrid = document.getElementsByClassName("automotive");
const productGrid = document.getElementsByClassName("product");
const fashionGrid = document.getElementsByClassName("fashion");
const interiorGrid = document.getElementsByClassName("interior");

//genre text
const portraitText = document.getElementById("portrait-text");
const autoText = document.getElementById("auto-text");

//grid wrapper
const portfolioWrapper = document.getElementById("portfolio");

// color change for Portait
portraitGrid[0].addEventListener("mouseenter", () => {
  portfolioWrapper.style.backgroundColor = portraitColor;
  portraitText.classList.remove("hide");
  portraitText.classList.add("show");
});
portraitGrid[0].addEventListener("mouseleave", () => {
  portfolioWrapper.style.backgroundColor = defaultColor;
  portraitText.classList.remove("show");
  portraitText.classList.add("hide");
});

// color change for Auto
automotiveGrid[0].addEventListener("mouseenter", () => {
  portfolioWrapper.style.backgroundColor = autoColor;
  autoText.classList.remove("hide");
  autoText.classList.add("show");
});

automotiveGrid[0].addEventListener("mouseleave", () => {
  portfolioWrapper.style.backgroundColor = defaultColor;
  autoText.classList.remove("show");
  autoText.classList.add("hide");
});

//color change for Product
productGrid[0].addEventListener("mouseenter", () => {
  portfolioWrapper.style.backgroundColor = productColor;
});
productGrid[0].addEventListener("mouseleave", () => {
  portfolioWrapper.style.backgroundColor = defaultColor;
});
//color change for Fashion
fashionGrid[0].addEventListener("mouseenter", () => {
  portfolioWrapper.style.backgroundColor = fashionColor;
});
fashionGrid[0].addEventListener("mouseleave", () => {
  portfolioWrapper.style.backgroundColor = defaultColor;
});

//color change for Interior
interiorGrid[0].addEventListener("mouseenter", () => {
  portfolioWrapper.style.backgroundColor = interiorColor;
});
interiorGrid[0].addEventListener("mouseleave", () => {
  portfolioWrapper.style.backgroundColor = defaultColor;
});

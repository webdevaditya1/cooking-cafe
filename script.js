// preloader Annimation script start ------------------------------------------------------------------------
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  // preloader.style.display = "none";
  preloader.remove();
});
// preloader end ------------------------------------------------------------------------
// Fallback for window.scrollY event
window.addEventListener("scroll", () => {
  handleScroll(window.scrollY);
});

function handleScroll(scrollY) {
  const navbar = document.getElementById("navbar");
  if (scrollY > 100) {
    /* adjust scroll threshold */
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
// ------------------------------------------------------------------------
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.1,
});
// Listen for Locomotive Scroll events
scroll.on("scroll", (instance) => {
  const scrollY = instance.scroll.y;
  handleScroll(scrollY);
});

// Initialize GLightbox
const glightbox = GLightbox({
  selector: '.glightbox'
});
alert("check")


// ---------------------------------------------------------------------
// navbar hamburger Animation script
const mainButton = document.getElementById("mainbutton");
const mainicon = document.getElementById("mainicon");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
mainButton.addEventListener("click", () => {
  mainicon.classList.toggle("burger");
  two.classList.toggle("dugi");
  one.classList.toggle("ekki");
  three.classList.toggle("thiki");
});

// ------------------------------------------------------------------------
// back to top animation
let back = document.querySelector(".back");
let backbtn = document.querySelector(".back-btn");
let backicon = document.querySelector(".back-icon");

back.addEventListener("mouseover", () => {
  backbtn.classList.add("back-btnoff");
  backicon.classList.add("back-iconon");
  console.log("mouseover");
});

back.addEventListener("mouseout", () => {
  backbtn.classList.remove("back-btnoff");
  backicon.classList.remove("back-iconon");
  console.log("mouseout");
});

// -----------------------------------------------------

let array = ["./images/1.jpg", "./images/8.jpg", "./images/28.jpg"];
let images = document.getElementById("auto-img");
let currentIndex = 0;
images.style.transition = "opacity 1s ease"; // Add CSS transition for opacity

function changeImage() {
  images.style.opacity = 0; // Set opacity to 0 before changing the image
  setTimeout(() => {
    images.setAttribute("src", array[currentIndex]);
    images.style.opacity = 0.4; // Set opacity back to 1 after changing the image
    currentIndex = (currentIndex + 1) % array.length;
  }, 1000); // Wait for the transition to complete before changing the image
}

setInterval(changeImage, 6000); // Change image every 5 seconds

// ------------------------------------------------------------------------
// newsletter form validation
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("newsletterForm").submit();
});
// ------------------------------------------------------------------------



// back to top click function
// document.getElementById("backToTop").addEventListener("click", function (event) {
//   event.preventDefault(); // Prevent the default anchor behavior
//   window.scrollTo({ top: 0, behavior: "smooth" });
//   console.log("clicked");
// });

(function () {
  // var scroll = new LocomotiveScroll({
  //   el: document.querySelector('[data-scroll-container]'),
  //   smooth: true,
  //   lerp: 0.1
  // });
})();

// testimonial slider animation
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let intervalId = null;
function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    slide.style.transform = "translateX(100%)";
    if (index === n) {
      slide.classList.add("active");
      slide.style.transform = "translateX(0%)";
    }
  });
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === n) {
      dot.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

intervalId = setInterval(nextSlide, 5000);
showSlide(0);

// let links = document.querySelectorAll(".nav-link");
// let allLinks = links.split('');

// // console.log(links);
// allLinks.push(links);
// console.log(allLinks);

// let name = "aditya";
// let lettersArray = name.split('');

// console.log(lettersArray); // Output: ['a', 'd', 'i', 't', 'y', 'a']

// // automated carasoul slider ----------------------------------------------
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');

// let currentSlide = 0;
// let intervalId = null;

// function showSlide(n) {
//   slides.forEach((slide, index) => {
//     slide.classList.remove('active');
//     if (index === n) {
//       slide.classList.add('active');
//     }
//   });
//   dots.forEach((dot, index) => {
//     dot.classList.remove('active');
//     if (index === n) {
//       dot.classList.add('active');
//     }
//   });
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// intervalId = setInterval(nextSlide, 3000);

// showSlide(0);

// // automated carasoul slider -------------------------------------------------------------------------------------------------------------------------
// ===========================================
// Array of image URLs
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg'
];

// Index to track the current image
let currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
  // Get the body element
  const body = document.body;

  // Set the background image
  body.style.backgroundImage = `url(${images[currentIndex]})`;

  // Update the index for the next image
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Initial call to set the first image
changeBackgroundImage();

// Set interval to change the image every 10 seconds (10000 milliseconds)
setInterval(changeBackgroundImage, 10000);

// ====================================================



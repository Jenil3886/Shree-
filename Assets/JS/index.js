// view rawstyle.css hosted with  by GitHub Here is the complete index.js file Source Code
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("Plz Subscribe ");
    nav_header.classList.toggle("active");
}

    ;

mobile_nav.addEventListener("click", () => toggleNavbar());
/* view rawindex.js hosted with by GitHub */

// Hero section 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// product card

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
      alert('Added to cart!');
  });
});
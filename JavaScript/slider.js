let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

let newIndex = 0;


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}

let myInterval = setInterval(plusSlides, 5000, 1); 


document.getElementById('next').addEventListener("click", function(e) {
  clearInterval(myInterval);
  myInterval = setInterval(plusSlides, 5000, 1); 
})

document.getElementById('prev').addEventListener("click", function(e) {
  clearInterval(myInterval);
  myInterval = setInterval(plusSlides, 5000, 1); 
})

document.getElementById('dot1').addEventListener("click", function(e) {
  clearInterval(myInterval);
  myInterval = setInterval(plusSlides, 5000, 1); 
})

document.getElementById('dot2').addEventListener("click", function(e) {
  clearInterval(myInterval);
  myInterval = setInterval(plusSlides, 5000, 1); 
})

document.getElementById('dot3').addEventListener("click", function(e) {
  clearInterval(myInterval);
  myInterval = setInterval(plusSlides, 5000, 1); 
})

document.getElementById('dot4').addEventListener("click", function(e) {
  clearInterval(myInterval);
  myInterval = setInterval(plusSlides, 5000, 1); 
})

document.getElementById('dot5').addEventListener("click", function(e) {
  clearInterval(myInterval);
  myInterval = setInterval(plusSlides, 5000, 1); 
})




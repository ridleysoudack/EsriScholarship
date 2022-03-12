//Portfolio page slideshow JS based off of: https://www.w3schools.com/howto/howto_js_slideshow.asp 
var slideIndex = 1; //Sets initial slide to slide 1 when user lands on page
function showSlides(n) { // This function controls which slide shows up as the variable slide index changes
  var i; //Set up variable for iteration
  var slides = document.getElementsByClassName("slide"); //Sets var slides, dots, and blurbs to relevant element classes
  var dots = document.getElementsByClassName("dot");
  var blurbs = document.getElementsByClassName("portfolio-blurb");
  if (n > slides.length) {slideIndex=1} //If n increases beyond slidelength, loop back to slideIndex 1
  if (n < 1) {slideIndex=slides.length} //If n decreases below 1, loop around to maximum slideIndex.
  for (i = 0; i < slides.length; i++) { // Set all slides to display = none
    slides[i].style.display = "none";
  }
  for (i = 0; i < blurbs.length; i++) { // Set all blurbs to display = none initially
    blurbs[i].style.display = "none";
}
  for (i = 0; i < dots.length; i++) { //Sets active dot styling
    dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block"; //Set slideIndex to display relevant slide and blurb, and set associated dot to 'active' class.
  blurbs[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Next/previous controls
function plusSlides(n) { // This function enables control of slides through next and previous button
  showSlides(slideIndex += n);
}
function currentSlide(n) { // This function enables control of slides through the slideshow dots
  showSlides(slideIndex = n)
}
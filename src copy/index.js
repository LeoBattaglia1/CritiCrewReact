var slideIndex = 0;
showSlide(slideIndex);

// Iniciar la reproducción automática
var autoPlayInterval = setInterval(function() {
  changeSlide(1);
}, 2000); // Cambia de diapositiva cada 2 segundos (ajusta este valor según tus necesidades)

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var slides = document.getElementsByTagName("img");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
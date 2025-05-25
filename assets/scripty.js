let index = 0;
  const track = document.getElementById('track');
  const slides = document.querySelectorAll('.carousel-slide');

  function moveSlide(direction) {
    index += direction;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
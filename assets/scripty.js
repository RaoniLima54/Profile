const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slides img').length;
  let index = 0;

  document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  });

  document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  function updateCarousel() {
    slides.style.transform = 'translateX(' + (-index * 100) + '%)';
  }
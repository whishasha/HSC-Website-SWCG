let numPosters = 30; // Set this value to control the number of movie posters
let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');

function loadPosters() {
  carousel.innerHTML = '';
  for (let i = 0; i < numPosters; i++) {
    const img = document.createElement('img');
    img.src = `https://via.placeholder.com/150x200?text=Test+${i+1}`;
    img.alt = `Poster ${i+1}`;
    carousel.appendChild(img);
  }
  updateCarouselPosition();
}

function scrollCarousel(direction) {
  const containerWidth = container.clientWidth;
  const posterWidth = carousel.querySelector('img').offsetWidth + 20;
  const totalPostersVisible = Math.floor(containerWidth / posterWidth);

  if (direction === 'left') {

    currentIndex = Math.max(currentIndex - 1, 0);
  } else if (direction === 'right') {

    currentIndex = Math.min(currentIndex + 1, numPosters - totalPostersVisible);
  }

  updateCarouselPosition();
}

function updateCarouselPosition() {
  const posterWidth = carousel.querySelector('img').offsetWidth + 20;
  carousel.style.transform = `translateX(-${currentIndex * posterWidth}px)`;
}

window.onload = () => {
  loadPosters();
};

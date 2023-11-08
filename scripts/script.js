let carouselWidth = document.querySelector('.carousel-inner.auc-inner').scrollWidth;
let cardWidth = document.querySelector('.carousel-item.auc-item').offsetWidth;
let scrollPosition = 0;
let maxVisibleCards = 5;
let currentIndex = 0;

function updateCarouselWidth() {
  carouselWidth = document.querySelector('.carousel-inner.auc-inner').scrollWidth;
}

function updateCardWidth() {
  cardWidth = document.querySelector('.carousel-item.auc-item').offsetWidth;
}

function updateMaxVisibleCards() {
  if (window.innerWidth >= 900) {
    maxVisibleCards = 5;
  } else if (window.innerWidth >= 750) {
    maxVisibleCards = 4;
  } else if (window.innerWidth >= 600) {
    maxVisibleCards = 3;
  } else if (window.innerWidth >= 450) {
    maxVisibleCards = 2;
  } else {
    maxVisibleCards = 1;
  }
}

window.addEventListener('resize', function() {
  currentIndex = Math.floor(scrollPosition / cardWidth); 
  updateCarouselWidth();
  updateCardWidth();
  updateMaxVisibleCards();
  scrollPosition = currentIndex * cardWidth; 
  var carouselInner = document.querySelector('.carousel-inner.auc-inner');
  carouselInner.scrollLeft = scrollPosition;
});

document.querySelector('.carousel-control-next').addEventListener('click', function() {
  if (scrollPosition < (carouselWidth - cardWidth * maxVisibleCards)) {
    scrollPosition += cardWidth;
    let carouselInner = document.querySelector('.carousel-inner.auc-inner');
    carouselInner.scroll({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
});

document.querySelector('.carousel-control-prev').addEventListener('click', function() {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    let carouselInner = document.querySelector('.carousel-inner.auc-inner');
    carouselInner.scroll({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
});

updateCarouselWidth();
updateCardWidth();
updateMaxVisibleCards();
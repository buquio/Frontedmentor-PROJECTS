let slides = Array.from(document.querySelectorAll('.slide')),
  prev = document.querySelector('.left'),
  next = document.querySelector('.right'),
  current = 0;

console.log(slides);

//   Clear All Images
const reset = () => {
  slides.map((slide) => {
    slide.style.display = 'none';
  });
};

// Start slides
const startSlide = () => {
  reset();
  slides[0].style.display = 'grid';
};

// Show Prev
const slideLeft = () => {
  reset();
  slides[current - 1].style.display = 'grid';
  current--;
};

// Show next
const slideRight = () => {
  reset();
  slides[current + 1].style.display = 'grid';
  current++;
};

// Left Arrow Click
prev.addEventListener('click', () => {
  if (current === 0) {
    current = slides.length;
  }
  slideLeft();
});

// Right Arrow Click
next.addEventListener('click', () => {
  if (current === slides.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

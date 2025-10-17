const sliderList = document.querySelector('.slider__list');
const btnNext = document.querySelector('.slider__btn--next');
const btnPrev = document.querySelector('.slider__btn--prev');

const scrollAmount = 110; // сколько прокручивать за клик

btnNext.addEventListener('click', () => {
  sliderList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
btnPrev.addEventListener('click', () => {
  sliderList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// === drag / swipe ===
let isDown = false;
let startX;
let scrollLeft;

sliderList.addEventListener('mousedown', (e) => {
  isDown = true;
  sliderList.classList.add('active');
  startX = e.pageX - sliderList.offsetLeft;
  scrollLeft = sliderList.scrollLeft;
});
sliderList.addEventListener('mouseleave', () => isDown = false);
sliderList.addEventListener('mouseup', () => isDown = false);
sliderList.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderList.offsetLeft;
  const walk = (x - startX) * 1.5; // скорость
  sliderList.scrollLeft = scrollLeft - walk;
});

// touch (мобильные)
sliderList.addEventListener('touchstart', e => {
  startX = e.touches[0].pageX - sliderList.offsetLeft;
  scrollLeft = sliderList.scrollLeft;
});
sliderList.addEventListener('touchmove', e => {
  const x = e.touches[0].pageX - sliderList.offsetLeft;
  const walk = (x - startX) * 1.5;
  sliderList.scrollLeft = scrollLeft - walk;
});

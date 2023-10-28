const sliderLine = document.querySelector('.slider__line');
const sliderItems = document.querySelectorAll('.slider__line-item');
const sliderBtnPrev = document.querySelector('.slider-buttons__btn-prev');
const sliderBtnNext = document.querySelector('.slider-buttons__btn-next');

let sliderCount = 0,
	sliderWidth;

window.addEventListener('resize', showSlideWidth);

sliderBtnPrev.addEventListener('click', switchPrevSlide);
sliderBtnNext.addEventListener('click', switchNextSlide);

function showSlideWidth() {
	sliderWidth = document.querySelector('.slider').offsetWidth;
	sliderLine.style.width = sliderWidth * sliderItems.length + 'px';
	sliderItems.forEach(item => item.style.width = sliderWidth + 'px');

	createRollSlider();
}
showSlideWidth();

function switchNextSlide() {
	sliderCount++;
	if (sliderCount >= sliderItems.length) sliderCount = 0;
	createRollSlider();
}
function switchPrevSlide() {
	sliderCount--;
	if (sliderCount < 0) sliderCount = sliderItems.length - 1;
	createRollSlider();
}
function createRollSlider() {
	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
setInterval(() => {
	switchNextSlide()
}, 3000);

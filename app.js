"use strict";
const slides = document.querySelectorAll('.slide');
slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);
//first slide 0%, second slide 100%, third slide 200%
const btnLeft = document.querySelector('#prev');
const btnRight = document.querySelector('#next');

let currentSlide = 0;
const maxSlide = slides.length - 1;

const slideImg = function(currentSlide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - currentSlide)}%)`);
}
//Next Slide
const nextSlide = function() {
    if(currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slideImg(currentSlide);
}
//Prev Slide
const prevSlide = function() {
    if(currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }
    slideImg(currentSlide);
}
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
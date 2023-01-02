import Slide from './slide.js'

const slide = new Slide('.slide', '.slide-wrapper');
slide.Init();
slide.changeSlide(3);
console.log(slide);

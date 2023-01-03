import {SlideNav} from './slide.js'

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.Init();
slide.addArrow('.prev', '.next')

console.log(slide);
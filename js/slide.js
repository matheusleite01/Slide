export default class Slide {
  constructor(slide, wrapper){
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0,starX: 0, movement: 0 }
  }

  moveSlide(distX){
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.starX - clientX ) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

 OnStart(event){
  event.preventDefault();
  this.dist.starX = event.clientX;
  console.log(this.dist.starX);
  this.wrapper.addEventListener('mousemove', this.onMove);
 }

 onMove(event){
  const finalPosition = this.updatePosition(event.clientX);
  this.moveSlide(finalPosition);
 }

 onEnd(event){
  this.wrapper.removeEventListener('mousemove', this.onMove);
  this.dist.finalPosition = this.dist.movePosition;
  
 }

 addSlideEvents(){
  this.wrapper.addEventListener('mousedown', this.OnStart);
  this.wrapper.addEventListener('mouseup', this.onEnd);

 }

 bindEvents(){
  this.OnStart = this.OnStart.bind(this);
  this.onMove = this.onMove.bind(this);
  this.onEnd = this.onEnd.bind(this);
 }

 Init(){
  this.bindEvents();
  this.addSlideEvents();
  return this;
 }
  
}
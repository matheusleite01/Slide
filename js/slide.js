export default class Slide {
  constructor(slide, wrapper){
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }


 OnStart(event){
  event.preventDefault();

  this.wrapper.addEventListener('mousemove', this.onMove);
 }

 onMove(event){

 }

 onEnd(event){
  
  this.wrapper.removeEventListener('mousemove', this.onMove);
  
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
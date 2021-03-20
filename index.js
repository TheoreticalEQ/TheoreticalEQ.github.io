import TinyGesture from './TinyGesture.js';
// Options object is optional. These are the defaults.
const options = {
  // Used to calculate the threshold to consider a movement a swipe. it is
  // passed type of 'x' or 'y'.
  threshold: (type, self) => Math.max(
    25,
    Math.floor(0.50 * (
      type === 'x'
        ? window.innerWidth || document.body.clientWidth
        : window.innerHeight || document.body.clientHeight
    ))
  ),
  // Minimum velocity the gesture must be moving when the gesture ends to be
  // considered a swipe.
  //velocityThreshold: 10,
  // Used to calculate the distance threshold to ignore the gestures velocity
  // and always consider it a swipe.
//  disregardVelocityThreshold: (type, self) => Math.floor(
//    0.5 * (
  //    type === 'x'
  //      ? self.element.clientWidth
  //      : self.element.clientHeight
  //  )
//  ),
  // Point at which the pointer moved too much to consider it a tap or longpress
  // gesture.
//  pressThreshold: 8,
  // If true, swiping in a diagonal direction will fire both a horizontal and a
  // vertical swipe.
  // If false, whichever direction the pointer moved more will be the only swipe
  // fired.
//  diagonalSwipes: false,
  // The degree limit to consider a swipe when diagonalSwipes is true.
//  diagonalLimit: Math.tan(45 * 1.5 / 180 * Math.PI),
  // Listen to mouse events in addition to touch events. (For desktop support.)
//  mouseSupport: true
};
document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('fister');
  const gesture = new TinyGesture(target, options);
  //let bgColor = null;

  gesture.on('panmove', () => {
  //console.log('panmove');
    if (gesture.animationFrame) {
      return;
    }
    gesture.animationFrame = window.requestAnimationFrame(() => {
      //if (!gesture.swipingDirection.startsWith('pre-')) {
        //target.style.backgroundColor = '#00AA00';
      //} else {
        //target.style.backgroundColor = bgColor;
      //}
      // const zDistance = -(Math.sqrt(Math.pow(gesture.touchMoveX, 2) + Math.pow(gesture.touchMoveY, 2)))+'px';
      //target.style.transition = 'background-color ease .3s';
      target.style.transform = 'perspective(1000px) translate3d('+gesture.touchMoveX+'px, '+gesture.touchMoveY+'px, 0)';
      //console.log('transform');
      window.requestAnimationFrame(() => {
        //target.style.transition = null;
      });
      gesture.animationFrame = null;
    });
  });

  gesture.on('panend', () => {
  //console.log('panend');
    //window.cancelAnimationFrame(gesture.animationFrame);
    //gesture.animationFrame = null;
    //target.style.transition = null;
    target.style.transform = null;
  //  bgColor = null;
    //target.style.backgroundColor = bgColor;
  });
  /*
  gesture.on('swiperight', () => {
    target.style.transform = 'perspective(1000px) translate3d(2000px, 0, 0)';
    setTimeout(() => target.style.transform = null, 1000);
  });
  */

  gesture.on('swipeleft', () => {
    swipePunchWof()
    /*
    console.log('swife left');
    showAngry();
    dropWolfHealth();
    blueTitle();
    wolfGrowl()
    sleep(100).then(() => {
      redTitle();
      showChill();


});
*/
    //target.style.transform = 'perspective(1000px) translate3d(-2000px, 0, 0)';
    setTimeout(() => target.style.transform = null, 1000);
  });
/*
  gesture.on('swipeup', () => {
    //console.log('swipeup');
    //target.style.transform = 'perspective(1000px) translate3d(0, -2000px, 0)';
    //setTimeout(() => target.style.transform = null, 1000);
  });
  gesture.on('swipedown', () => {
    //target.style.transform = 'perspective(1000px) translate3d(0, 2000px, 0)';
    //setTimeout(() => target.style.transform = null, 1000);
  });

  let tapTimeout;
  gesture.on('tap', () => {
    target.style.transform = 'perspective(1000px) translate3d(0, 0, 100px)';
    tapTimeout = setTimeout(() => target.style.transform = null, 300);
  });
  gesture.on('doubletap', () => {
    target.style.transform = 'perspective(1000px) translate3d(0, 0, 400px)';
    clearTimeout(tapTimeout);
    setTimeout(() => target.style.transform = null, 300);
  });
  gesture.on('longpress', () => {
    bgColor = '#666688';
    target.style.backgroundColor = bgColor;
  });
  */
});

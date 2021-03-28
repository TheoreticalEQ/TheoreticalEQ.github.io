var fister = document.getElementById("maskImage");
// touch or click support for moving
var hits = 0;
// console.log(i + j);
let currentDroppable = null;

fister.onmousedown = function(event) {

let shiftX = event.clientX - fister.getBoundingClientRect().left;
let shiftY = event.clientY - fister.getBoundingClientRect().top;

// fister.classList.add("tphoto");
fister.style.position = 'absolute';
// fister.style.zIndex = 1000;
document.body.append(fister);

moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
  fister.style.left = pageX - shiftX + 'px';
  fister.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
  moveAt(event.pageX, event.pageY);

  fister.hidden = true;
  let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  fister.hidden = false;

  if (!elemBelow) return;

  let droppableBelow = elemBelow.closest('.droppable');
  if (currentDroppable != droppableBelow) {
    if (currentDroppable) { // null when we were not over a droppable before this event
      leaveDroppable(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) { // null if we're not coming over a droppable now
      // (maybe just left the droppable)
      enterDroppable(currentDroppable);
    }
  }
}

document.addEventListener('mousemove', onMouseMove);

fister.onmouseup = function() {
  document.removeEventListener('mousemove', onMouseMove);
  fister.onmouseup = null;
};

};

fister.ontouchstart = function(event) {

let touchshiftX = event.touches[0].clientX - fister.getBoundingClientRect().left;
let touchshiftY = event.touches[0].clientY - fister.getBoundingClientRect().top;

fister.style.position = 'absolute';
// fister.style.zIndex = 1000;
document.body.append(fister);

touchmoveAt(event.touches[0].pageX, event.touches[0].pageY);

function touchmoveAt(pageX, pageY) {
  fister.style.left = pageX - touchshiftX + 'px';
  fister.style.top = pageY - touchshiftY + 'px';
}

function onTouchMove(event) {
  touchmoveAt(event.touches[0].pageX, event.touches[0].pageY);

  fister.hidden = true;
  let touchelemBelow = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);
  fister.hidden = false;

  if (!touchelemBelow) return;

  let droppableBelow = touchelemBelow.closest('.droppable');
  if (currentDroppable != droppableBelow) {
    if (currentDroppable) { // null when we were not over a droppable before this event
      leaveDroppable(currentDroppable);
    }
    currentDroppable = droppableBelow;
    if (currentDroppable) { // null if we're not coming over a droppable now
      // (maybe just left the droppable)
      enterDroppable(currentDroppable);
    }
  }
}

document.addEventListener('touchmove', onTouchMove);

fister.ontouchend = function() {
  document.removeEventListener('touchmove', onTouchMove);
  fister.ontouchend = null;
};

};

function enterDroppable(elem) {
ouchNoise()
hits = hits + 1;
brieflyShowAngryWolf();
ouchNoise();
dropWolfHealth()
// console.log("hits: " + hits);
document.getElementById("score").innerHTML = "SCORE: " + hits;

// elem.style.background = 'pink';
}

function leaveDroppable(elem) {
// j = j + 1;
// console.log("j: " + j);
elem.style.background = '';
}

fister.ondragstart = function() {
return false;
};

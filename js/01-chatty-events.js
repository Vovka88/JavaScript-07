const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 1250));

function onMouseMove(e) {
  mouseMoveCounter += 1;
  coordsOutputRef.textContent = `
  К-ть викликів onMouseMove: ${mouseMoveCounter}`;
}

const outputRef = document.querySelector('.js-output');
const inputRef = document.querySelector('.js-input');
let inputCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 1250));

function onInputChange(e) {
  inputCounter += 1;
  outputRef.textContent = `
  К-ть викликів onInputChange: ${inputCounter}`;
}

// importing document contents
const face = document.querySelector('.face');

const pupilL = document.querySelector('.pupil-left');
const pupilR = document.querySelector('.pupil-right');

const boxes = document.querySelectorAll('.box');


// moving eyes
function moveEye(event) {
  const eyeBoxL = pupilL.getBoundingClientRect();
  const eyeBoxR = pupilR.getBoundingClientRect();
  const centerX = eyeBoxL.left + ((eyeBoxR.left - eyeBoxL.left) / 2);
  const centerY = eyeBoxL.top + eyeBoxL.height / 2;

  // distance between mouse cursor & pupil's center 
  const dirX = event.clientX - centerX;
  const dirY = event.clientY - centerY;

  // translate min - max
  const moveX = Math.max(-15, Math.min(15, dirX / 20));
  const moveY = Math.max(-6, Math.min(6, dirY / 20));

  pupilL.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
  pupilR.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
}

document.addEventListener('mousemove', moveEye);


// eyes - position & size
function updateContents() {

  const faceSize = face.getBoundingClientRect();

  const eyeL = { x: 0.32, y: 0.545 };
  const eyeR = { x: 0.67, y: 0.545 };

  const eyeSize = faceSize.width * 0.11;


  // left eye
  pupilL.style.width = `${eyeSize}px`;
  pupilL.style.height = `${eyeSize}px`;
  pupilL.style.left = `${faceSize.left + faceSize.width * eyeL.x}px`;
  pupilL.style.top = `${faceSize.height * eyeL.y}px`;

  //right eye
  pupilR.style.width = `${eyeSize}px`;
  pupilR.style.height = `${eyeSize}px`;
  pupilR.style.left = `${faceSize.left + faceSize.width * eyeR.x}px`;
  pupilR.style.top = `${faceSize.height * eyeR.y}px`;

  // adjust center 
  pupilL.style.transform = 'translate(-50%, -50%)';
  pupilR.style.transform = 'translate(-50%, -50%)';

}

window.addEventListener('load', updateContents);
window.addEventListener('resize', updateContents);



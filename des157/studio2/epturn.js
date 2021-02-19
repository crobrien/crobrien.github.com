(function () {
    'use strict';
    document.addEventListener('mousemove', reportPos);
    const theImg = document.querySelector('img');
    let prevXLoc = 0;
    let prevYLoc = 0;

function reportPos(event) {
//const windowWidth = window.innerWidth;
//const widthPercent = windowWidth / 10;
//const xPos = event.clientX;
//const changePhoto = Math.floor(xPos / widthPercent);

const windowHeight = window.innerHeight;
const heightDegree = windowHeight / 360;
const yPos = event.clientY;
const changeRotation = Math.floor(yPos / heightDegree);

//if (changePhoto !== prevXLoc) {
  //  theImg.src = `imgs/pup-${changePhoto}.svg`;
    //prevXLoc = changePhoto;
    //console.log(prevXLoc);
//}

if (changeRotation !== prevYLoc) {
   theImg.style.transform = `rotate(${changeRotation}deg)`;
     prevYLoc = changeRotation;
 }
}

})();

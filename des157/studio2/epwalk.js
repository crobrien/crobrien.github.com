    (function () {
        'use strict';
        document.addEventListener('mousemove', reportPos);
        const theImg = document.querySelector('img');
        let prevXLoc = 0;
        let prevYLoc = 0;

function reportPos(event) {
    const windowWidth = window.innerWidth;
    const widthPercent = windowWidth / 35;
    const xPos = event.clientX;
    const changePhoto = Math.floor(xPos / widthPercent);

  
    
    if (changePhoto !== prevXLoc) {
        theImg.src = `imgs/dog-${changePhoto}.svg`;
        prevXLoc = changePhoto;
        console.log(prevXLoc);
    }
}

})();

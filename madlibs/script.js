(function(){
    'use strict';

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const one = document.querySelector('#one').value;
        const two = document.querySelector('#two').value;
        const three = document.querySelector('#three').value;
        const four = document.querySelector('#four').value;
        const five = document.querySelector('#five').value;
        const six = document.querySelector('#six').value;
        const seven = document.querySelector('#seven').value;
        const eight = document.querySelector('#eight').value;

        if(one && two && three && four && five && six && seven && eight){
            myForm.remove();
            let myText = `If you are traveling in ${one} and find yourself having to cross a piranha filled river, here is how to do it. Piranhas are more ${two} during the day, so cross the river at night. While ${three} across the river, do so ${four}, you don’t want to wake them up and make them ${five}! Whatever you do, if you have an open wound try to find another way. Piranhas are attracted to ${six} and will most likely team up to take a bite of your ${seven} if you ${eight} in the water!
            <br><br>
            <button id="reload" onClick="window.location.reload();">START OVER</button>`;
            madlib.innerHTML = myText;
            madlib.className = "output";
        }
        else{
            let myText = "<br>Please give me words to put in your Mad Lib!";
            madlib.innerHTML = myText;
            madlib.className = "error";
        };

    });

    const surprise = document.getElementById('surprise');
    const dog = document.getElementById('fish');

    surprise.addEventListener("click", function(event){
        event.preventDefault();
        dog.id = 'fishflip';
    });

    surprise.addEventListener("mouseout", function(event){
        event.preventDefault();
        dog.id = 'fish';
    })

}());
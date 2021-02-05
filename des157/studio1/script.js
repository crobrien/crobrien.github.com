(function(){
    'use strict';
    //lib script


    var myForm = document.querySelector('#myform');
    var madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        var place = document.querySelector('#place').value;
        var adj1 = document.querySelector('#adj1').value;
        var ing = document.querySelector('#ing').value;
        var adv = document.querySelector('#adv').value;
        var adj2 = document.querySelector('#adj2').value;
        var noun = document.querySelector('#noun').value;
        var body = document.querySelector('#body').value;
        var verb = document.querySelector('#verb').value;

        var myText = `If you are traveling in ${place} and find yourself having to cross a piranha filled river, here is how to do it. Piranhas are more ${adj1} during the day, so cross the river at night. While ${ing} across the river, do so ${adv}, you don’t want to wake them up and make them ${adj2}! Whatever you do, if you have an open wound try to find another way. Piranahs are attracted to ${noun} and will most likely team up to take a bite of your ${body} if you ${verb} in the water!`;

   
        madlib.innerHTML = myText;
    });

    //clear our the fields
    var formData = document.querySelectorAll("input[type=text]");
    for (eachField of formData) {
        eachField.value = "";
    }
})()
(function() {
    "use strict";
    console.log("reading js");
  
          // start scripts
          const mainContent = document.getElementsByTagName('main')[0];
          const startButton = document.querySelector('button');
          startButton.addEventListener('click', function() {
            // set up form
            mainContent.removeChild(startButton);
  
            const form = document.createElement('form');
  
            const stylingDiv = document.createElement('div');
            stylingDiv.setAttribute("id", "inputArea");
            form.appendChild(stylingDiv);
  
            // initializing the form to first field
            const input = document.createElement('input');
            input.setAttribute("type", "text");
            input.setAttribute("class", "currentInput");
            input.setAttribute("id", "music");
            stylingDiv.appendChild(input);
  
            const label = document.createElement('label');
            label.setAttribute("for", "music");
            label.innerHTML = "What is your name?";
            stylingDiv.appendChild(label);
  
            const button = document.createElement('button');
            button.setAttribute("id", "formButton");
            button.innerHTML = "next";
            form.appendChild(button);
  
            mainContent.appendChild(form);
  
            // processing the form
            const attributes = ["nouns", "treatment", "date1", "date2", "date3"];
            const labels = ["What are your pronouns?", "What are you seeking treatment for? (i.e. anxiety)", "What date are you available?", "Provide an altrenative date", "Provide a second alternative"];
            let i = 0;
            let words = [];
  
            const currentInput = document.querySelector('input');
            const currentLabel = document.querySelector('label');
  
            const next = document.getElementById('formButton');
            next.addEventListener('click', function(event) {
              event.preventDefault();
              if ((currentInput.value == null) || (currentInput.value == "")) {
                alert(`Hey! Give me a ${currentLabel.innerHTML}!`);
              }
              words.push(currentInput.value);
              currentInput.value = "";
              if (i == (labels.length)) {  // done with the array
                // print out mad lib
                mainContent.removeChild(mainContent.children[0]); // should delete form tag, which will be the only child
                const madLibTag = document.createElement('p');
                madLibTag.setAttribute("id", "madLibOut");
                madLibTag.innerHTML =
                  `Hello, my name is <span class=\"libWord\">${words[0]}</span> 
                  and my pro-nouns are <span class=\"libWord\">${words[1]}</span>.
                  I am seeking treatment for <span class=\"libWord\">${words[2]}</span>, and I would like to make an appointment at your health center.
                  I am available <span class=\"libWord\">${words[3]}</span>, <span class=\"libWord\">${words[4]}</span> and <span class=\"libWord\">${words[5]}</span>;
                  Do you have openings during any of these times?`;
                mainContent.appendChild(madLibTag);
  
              } else {  // more fields to be filled in
                currentInput.setAttribute("id", `${attributes[i]}`);
                currentLabel.innerHTML = `${labels[i]}`;
                currentLabel.setAttribute("for", `${attributes[i]}`);
                if (i == (labels.length-1)) {  // at last item in array
                  next.setAttribute("value", "Get my MadLib!");
                }  // if
              }  // else nested
            i++;
            });  // next event listener
          });  // start button event listener
  }());
  
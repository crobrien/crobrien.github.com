(function () {
    'use strict';
    const pig = document.querySelector('h1').cloneNode(true);
    const game = document.querySelector('.game');
    const startButton = document.querySelector('#startButton');
    let gameData = {
      dice: ['1.svg','2.svg', '3.svg',
            '4.svg', '5.svh', '6.svg'],
      players: ['player 1', 'player 2'],
      sides: ['left', 'right'],
      score: [0, 0],
      roll1: 0,
      roll2: 0,
      rollSum: 0,
      index: 0,
      gameEnd: 59
    };
  
   
    startButton.addEventListener('click', getPlayers);
  
    function getPlayers() {
    
      gameData.score[0] = 0;
      gameData.score[1] = 0;
      gameData.index = 0;
//ready plr 1 
      game.removeChild(document.querySelector('button'));
      
      const enterPlayer = document.createElement('h2');
      enterPlayer.innerHTML = 'Player 1';
      game.appendChild(enterPlayer);
  
      const newInput = document.createElement('input');
      game.appendChild(newInput);
      const inputArea = document.querySelector('input');
      inputArea.focus();
  
//buttons
      const newButton = document.createElement('button');
      newButton.setAttribute('type', 'button');
      newButton.setAttribute('id', 'playerButton');
      newButton.innerHTML = 'ready!';
      game.appendChild(newButton);
      const playerButton = document.querySelector('#playerButton');
  
      playerButton.addEventListener('click', submitPlayer);
      
      playerButton.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
          submitPlayer();
        }
      });
    }

//ready plr 2
    function submitPlayer() {
      const inputArea = document.querySelector('input');
  

      gameData.players[0] = inputArea.value;
      inputArea.value = "";
      inputArea.focus();
  
      const preStart = document.querySelector('#playerButton').cloneNode(true);
      preStart.id = 'preStart';
      game.removeChild(document.querySelector('button'));
      game.appendChild(preStart);
  

      document.querySelector('h2').innerHTML = 'Player 2';
  
// send to board
      preStart.addEventListener('click', function() {
        gameData.players[1] = inputArea.value;
        setUpBoard();
      });

      preStart.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          gameData.players[1] = inputArea.value;
          setUpBoard();
        }
      });
    }

//organize board
    function setUpBoard() {
     
  
        game.innerHTML = '';
  
//ready plr 1
      const leftPlayerSide = document.createElement('div');
      leftPlayerSide.className = 'playerSide';
      leftPlayerSide.id = 'leftPlayer';
  
      let scoreTag1 = document.createElement('h2');
      scoreTag1.className = 'score';
      scoreTag1.innerHTML = '0';  
      scoreTag1.classList.add(`${gameData.sides[0]}`); 
      leftPlayerSide.appendChild(scoreTag1);
      
      let nameTag1 = document.createElement('h3');
      nameTag1.className = 'name';
      nameTag1.innerHTML = `${gameData.players[0]}`;
      leftPlayerSide.appendChild(nameTag1);
//ready plr 2
      const rightPlayerSide = document.createElement('div');
      rightPlayerSide.className = 'playerSide';
      rightPlayerSide.id = 'rightPlayer';
      
      let scoreTag2 = document.createElement('h2');
      scoreTag2.className = 'score';
      scoreTag2.innerHTML = '0';  
      rightPlayerSide.appendChild(scoreTag2);
     
      let nameTag2 = document.createElement('h3');
      nameTag2.className = 'name';
      nameTag2.innerHTML = `${gameData.players[1]}`;
      rightPlayerSide.appendChild(nameTag2);
  
//game board
      const center = document.createElement('div');
      center.id = 'center';
     
      const start = document.createElement('button');
      start.setAttribute('type', 'button');
      start.innerHTML = 'start';
      start.id = 'start';
      center.appendChild(pig);
      center.appendChild(start);
  
      game.classList.add('activeGame');
      game.appendChild(leftPlayerSide);
      game.appendChild(center);
      game.appendChild(rightPlayerSide);
  
      start.addEventListener('click', startGame);
    }
//interface
    function startGame() {
      const center = document.querySelector('#center');
  
      center.innerHTML = '';
  
      const dice = document.createElement('div');
      dice.className = 'dice';

      const leftDie = document.createElement('img');
      leftDie.className = 'leftDie';
      leftDie.setAttribute('alt', 'Left die');
      dice.appendChild(leftDie);

      const rightDie = document.createElement('img');
      rightDie.className = 'rightDie';
      rightDie.setAttribute('alt', 'Right die');
      dice.appendChild(rightDie);

      dice.classList.add('hide');
  
      const whoseTurn = document.createElement('h1');
      whoseTurn.className = 'whoseTurn';
      whoseTurn.classList.add(`${gameData.sides[gameData.index]}`);
      whoseTurn.innerHTML = `${gameData.players[gameData.index]}'s turn!`;

//roll and pass
      const options = document.createElement('div');
      options.className = 'options';

      let passButton = document.createElement('button');
      passButton.setAttribute('type', 'button');
      passButton.innerHTML = 'pass';
      passButton.id = 'pass';
      options.appendChild(passButton);

      let rollButton = document.createElement('button');
      rollButton.setAttribute('type', 'button');
      rollButton.innerHTML = 'roll';
      rollButton.id = 'rollButton';
      options.appendChild(rollButton);
  
      center.appendChild(dice);
      center.appendChild(whoseTurn);
      center.appendChild(options);
  
      rollButton = document.querySelector('#rollButton');
      rollButton.addEventListener('click', function() {
        rollDice();
      });
  
      passButton = document.querySelector('#pass');
      passButton.addEventListener('click', function() {
        switchPlayers();
      });
    }
  
    function rollDice() {

      const die1 = document.querySelector('.leftDie');
      const die2 = document.querySelector('.rightDie');
      const dice = document.querySelector('.dice');
      const whoseTurn = document.querySelector('.whoseTurn');
      const options = document.querySelector('.options');

      if (dice.classList.contains('hide')) {
        dice.classList.remove('hide');
      }
//randomize die
      gameData.roll1 = Math.floor(Math.random()*6)+1;
      gameData.roll2 = Math.floor(Math.random()*6)+1;
      gameData.rollSum = gameData.roll1 + gameData.roll2;
      console.log(gameData.roll1);
      console.log(gameData.roll2);
  
//cows!
      die1.setAttribute('src', `images/${gameData.roll1}.svg`);
      die2.setAttribute('src', `images/${gameData.roll2}.svg`);
  
      if (gameData.rollSum === 2) {
//two bums
        gameData.score[gameData.index] = 0;
        updateScore();
        options.classList.add('hide');
        whoseTurn.innerHTML = 'COW BUMS!';
        setTimeout(switchPlayers, 3000);
      } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
//one bum
        options.classList.add('hide');
        whoseTurn.innerHTML = 'You rolled a bum! Switching players...';
        setTimeout(switchPlayers, 3000);
      } else {
//no bum
        gameData.score[gameData.index] += gameData.rollSum;
        updateScore();
  
        checkWinningCondition();
      }
    }
//changing plyr  
    function switchPlayers() {
      const dice = document.querySelector('.dice');
      const whoseTurn = document.querySelector('.whoseTurn');
      const options = document.querySelector('.options');
  
      if (options.classList.contains('hide')) {
        options.classList.remove('hide');
      }

      dice.classList.add('hide');
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      whoseTurn.innerHTML = `${gameData.players[gameData.index]}'s turn!`;
     
      if (gameData.index == 0) {
        document.querySelector('#rightPlayer .score').classList.remove(`${gameData.sides[1]}`);
        document.querySelector('#leftPlayer .score').classList.add(`${gameData.sides[0]}`);
        whoseTurn.classList.remove(`${gameData.sides[1]}`);
        whoseTurn.classList.add(`${gameData.sides[0]}`);
      } 
      else {
        document.querySelector('#leftPlayer .score').classList.remove(`${gameData.sides[0]}`);
        document.querySelector('#rightPlayer .score').classList.add(`${gameData.sides[1]}`);
        whoseTurn.classList.remove(`${gameData.sides[0]}`);
        whoseTurn.classList.add(`${gameData.sides[1]}`);
      }
    }
  
//scoring win
    function checkWinningCondition() {
      if (gameData.score[gameData.index] > gameData.gameEnd) {
      
        const center = document.querySelector('#center');
        let subtitle = document.querySelector('.whoseTurn').cloneNode(true);
        let restartButton = document.querySelector('.options #rollButton').cloneNode(true);
  
        center.innerHTML = '';
  
        subtitle.innerHTML = `${gameData.players[gameData.index]} wins!`;
        subtitle.classList.remove('whoseTurn');
        subtitle.classList.add('whoWins');
  
        restartButton.id = 'restart';
        restartButton.innerHTML = 'restart';
  
        center.appendChild(subtitle);
        center.appendChild(restartButton);
  
        restartButton.addEventListener('click', reset);
      } else {
        updateScore();
      }
    }
  
    function updateScore() {
      if (gameData.index == 0) {
        document.querySelector('#leftPlayer .score').innerHTML = `${gameData.score[0]}`;
      } else { 
        document.querySelector('#rightPlayer .score').innerHTML = `${gameData.score[1]}`;
      }
    }
  
//reset button
    function reset() {
      let startButton = document.querySelector('#restart');
      startButton.innerHTML = 'play!';
      startButton.id = 'startButton';
  
      game.innerHTML = '';
      game.appendChild(pig);
      game.appendChild(startButton);
      game.classList.remove('activeGame');
  
      startButton = document.querySelector('#startButton');
      startButton.addEventListener('click', getPlayers);
    }
  
  })();
  
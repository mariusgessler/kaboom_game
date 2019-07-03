// Variables

let order = []; // Keeps track of how the lights are going to flash
let playerOrder = []; // Keeps track of the order that the player is pressing the lights
let flash; // The number of flashes that have appeared in the game
let turn; // Keeps track of which turn the player is on
let good; // Boolean - Determines whether the player has hit all the right colours or not
let compTurn; // Boolean - Determines whether it is the players or the computers turn
let intervalId; // Interval that runs the computers turn
let noise = true; // noise plays when its supposed to 
let win; // States if the player has won the game or not

let colours = ['lightgreen','tomato','yellow','lightskyblue']


// HTML References

const towerSignal = document.querySelector('#tower-signal')
const topLeft = $('.topleft');
const topRight = $('.topright');
const bottomLeft = $('.bottomleft');
const bottomRight = $('.bottomright');

const startButton = document.querySelector('#start-btn')
const liveInstructions = document.querySelector('#live_instructions');
const onSwitch = document.querySelector('#on-switch');
const indicator = document.querySelector('#indicator');
const instructions = document.querySelector ('#instructions');

const fireworksOne = document.querySelector('#fireworks_1');
const fireworksTwo = document.querySelector('#fireworks_2');


// Functions -  in the order of how you would play the game

//1. Turning on the remote

onSwitch.addEventListener('click', (event) => {
    if (onSwitch.checked == true) {
        on = true;
        liveInstructions.innerHTML = "Press Start!"; 
    } else {
        on = false;
        liveInstructions.innerHTML = "Turn on the remote!";
        clearColor();
        clearInterval(intervalId);
    }
})


// 2. Starting the game


startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }  
});


function play() {
    // Reseting the variables before starting a game/ new game
    win = false; 
    compTurn = true;
    order = [];
    playerOrder = []; 
    flash = 0;
    intervalId = 0;
    turn = 1;
    liveInstructions.innerHTML = '';
    good = true;
    
    // Filing the order array
    for (var i = 0; i < 7; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    
    // Flashing the light every 800ms and keep repeating 
    // until all the lights have flashed
    intervalId = setInterval(gameTurn, 800);

    startButton.innerHTML = '1/7' ;
    startButton.style.backgroundColor = 'lightgray';
    startButton.style.color = 'black';
    fireworksOne.style.display = 'none';
    fireworksTwo.style.display = 'none';
    instructions.style.display = 'none';
    clearIndicator();

}

//3. Flashing the tower signals

function gameTurn() {
    on = false;

     // Disables player from clicking buttons when its the computers turn

    if (flash == turn) { // If the number of times the light have flashed equals the number of the turn the player is on, the computers turn is over
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true; // The player can now start pressing buttons
    }
    
    if (compTurn) { // If it's the computers turn
        clearColor();
        setTimeout(() => { // Flashing the tower signals
            if (order[flash] == 1) green(); // order is an array of 4 random numbers, flash is the number of times a colour has flashed - it starts at 0 so 0 is the first number in the order array. If the first item is 1, the one() will run.
            if (order[flash] == 2) red();
            if (order[flash] == 3) yellow();
            if (order[flash] == 4) blue();
            flash++; 
        console.log(order)
        }, 200); // A light will flash every 800ms (because of intervalId) but because of the 200ms it will stop for 200ms and then flash again.
    }
}


// function flashTower() { 
//     if (noise) { // If it should make a noise (noise = true), it will make a noise
//         let audio = document.getElementById('audio-flash');
//         audio.play();
//     }
//     noise = true;
//     towerSignal.style.backgroundColor = `${colours[order - 1]}`;
//     towerSignal.style.boxShadow = `0px 0px 20px 10px ${colours[order -]}`;
// }

function green() { 
    if (noise) { // If it should make a noise (noise = true), it will make a noise
        let audio = document.getElementById('audio-flash');
        audio.play();
    }
    noise = true;
    towerSignal.style.backgroundColor = "lightgreen";
    towerSignal.style.boxShadow = "0px 0px 20px 10px lightgreen";
}

// function oneRemote() {
//     if (noise) {
//         let button = document.getElementById('button');
//         button.play();
//     }
//     noise = true;
//     topLeft.style.backgroundColor = "lightgreen";
// }

 function red() {
    if (noise) {
        let audio = document.getElementById('audio-flash');
        audio.play();
    }
    noise = true;
    towerSignal.style.backgroundColor = "tomato";
    towerSignal.style.boxShadow = "0px 0px 20px 10px tomato";
}

// function twoRemote() {
//     if (noise) {
//         let button = document.getElementById('button');
//         button.play();
//     }
//     noise = true;
//     topRight.style.backgroundColor = "tomato";
// }

function yellow() {
    if (noise) {
        let audio = document.getElementById('audio-flash');
        audio.play();
    }
    noise = true;
    towerSignal.style.backgroundColor = "yellow";
    towerSignal.style.boxShadow = "0px 0px 20px 10px yellow";
}

// function threeRemote() {
//     if (noise) {
//         let button = document.getElementById('button');
//         button.play();
//     }
//     noise = true;
//     bottomLeft.style.backgroundColor = "yellow";
// }

function blue() {
    if (noise) {
        let audio = document.getElementById('audio-flash');
        audio.play();
    }
    noise = true;
    towerSignal.style.backgroundColor = "lightskyblue";
    towerSignal.style.boxShadow = "0px 0px 20px 10px lightskyblue";
}

// function fourRemote() {
//     if (noise) {
//         let button = document.getElementById('button');
//         button.play();
//     }
//     noise = true;
//     bottomRight.style.backgroundColor = "lightskyblue";
// }

function clearColor() {
    topLeft.css('background-color', 'darkgreen');
    topRight.css('background-color', 'darkred');
    bottomLeft.css('background-color', 'goldenrod');
    bottomRight.css('background-color', 'darkblue');
    towerSignal.style.backgroundColor = "transparent";
    towerSignal.style.boxShadow = "none";
    }

function clearIndicator() {
    indicator.style.backgroundColor = 'black';
    indicator.style.boxShadow = 'none';
}

function flashColor() {
    topLeft.css('background-color', 'lightgreen');
    topRight.css('background-color', 'tomato');
    bottomLeft.css('background-color', 'yellow');
    bottomRight.css('background-color', 'lightskyblue');
    }

function flashIndicatorCorrect() {
    indicator.style.backgroundColor = "lightgreen";
    indicator.style.boxShadow = '0px 0px 20px 10px lightgreen'
}

function flashIndicatorWrong() {
    indicator.style.backgroundColor = "tomato";
    indicator.style.boxShadow = '0px 0px 20px 10px tomato'
}



// 4. Make the buttons clickable and take players input

$('.colour').click(function(){
        console.log($(this).index());
        var index = $(this).index();
        playerOrder.push(index+1);
        check();
        if (noise) {
            let button = document.getElementById('button');
            button.play();
        }
        noise = true;
        $(this).css('background-color', `${colours[index]}`)

        if(!win) { // If the player has not won (=is not on the 7th turn)
                            setTimeout (() => {
                               clearColor();
                         }, 300);}
    });




        //1. Array with colours
        //2. 

//         if ($(this).hasClass('topleft')) {
//             playerOrder.push(index);
//             check();
//             oneRemote(n);
//         }

//         else if ($(this).hasClass('topright')) {
//             playerOrder.push(2);
//             check();
//             twoRemote();
//         }

//         else if ($(this).hasClass('bottomleft')) {
//             playerOrder.push(3);
//             check();
//             threeRemote();
//         }

//         else if ($(this).hasClass('bottomright')) {
//             playerOrder.push(4);
//             check();
//             fourRemote();

//             if(!win) { // If the player has not won (=is not on the 7th turn)
//                 setTimeout (() => {
//                     clearColor();
//                 }, 300);
//         }
// };

    






// topLeft.addEventListener('click', (event) => { 
//     if (on) {
//         playerOrder.push(1); // Add one to the playerOrder array
//         check(); 
//         oneRemote(); 
//         if(!win) { // If the player has not won (=is not on the 7th turn)
//             setTimeout (() => {
//                 clearColor();
//             }, 300);
//         }
//     }
// })

// topRight.addEventListener('click', (event) => {
//     if (on) {
//         playerOrder.push(2); 
//         check();
//         twoRemote();
//         if(!win) {
//             setTimeout (() => {
//                 clearColor();
//             }, 300);
//         }
//     }
// })

// bottomLeft.addEventListener('click', (event) => {
//     if (on) {
//         playerOrder.push(3); 
//         check();
//         threeRemote();
//         if(!win) {
//             setTimeout (() => {
//                 clearColor();
//             }, 300);
//         }
//     }
// })

// bottomRight.addEventListener('click', (event) => {
//     if (on) {
//         playerOrder.push(4); 
//         check();
//         fourRemote();
//         if(!win) {
//             setTimeout (() => {
//                 clearColor();
//             }, 300);
//         }
//     }
// })



// 5. Check if the player got it right

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) // Check if the last colour the player clicked equals the colour the computer flashed 
      good = false; 
  
    if (playerOrder.length == 7 && good) { // Check if player is on the last round and wins the game
      winGame(); 
    }
  
    if (good == false) { //Check if the player got sth wrong
      flashColor();
      flashIndicatorWrong();
      startButton.innerHTML = "AGAIN?";
      startButton.style.color = 'darkred';
      startButton.style.backgroundColor = 'tomato'
      let errorSound = document.getElementById('error');
      errorSound.play();
      noise = false; 
    }
  
    if (turn == playerOrder.length && good && !win) { //Player got it right but has not won the game yet
      turn++; //go to the next turn
      playerOrder = [];
      compTurn = true;
      flash = 0;
      setTimeout(() => {
        startButton.innerHTML = `${turn -1}/7`;
      },200);
      flashIndicatorCorrect();
      setTimeout (() => {
        clearIndicator();
    }, 300);
      liveInstructions.innerHTML = ``;
      intervalId = setInterval(gameTurn, 800);
      }800;
  }
  
function winGame() { //Player wins the game
    flashColor();
    flashIndicatorCorrect();
    startButton.disabled = true;
    startButton.innerHTML = "KABOOM!";
    setTimeout(() => {
        startButton.innerHTML = "AGAIN?"
        startButton.disabled = false;
    }, 3500);
    startButton.style.color = 'green';
    startButton.style.backgroundColor ="lightgreen"
    fireworksOne.style.display = 'block';
    setTimeout(() => {
        fireworksTwo.style.display = 'block'
    },3000);
    let fireworksSound = document.getElementById('fireworksSound_3');
        fireworksSound.play(); 
    on = false;
    win = true;
  }
 





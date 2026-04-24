const boxes = document.querySelectorAll(".container");
const startBtn = document.getElementById("startBtn");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");

let time = 0;
let mainLoop = null;
let score = 0;
const color = 'red';

function startGame() {
  if (mainLoop !== null) {
    clearInterval(mainLoop);
  }
  score = 0;
  time = 0;
  mainLoop = setInterval(function () {

    //Main Loop
    let randomBox = Math.floor(Math.random() * 9);
    boxes[randomBox].style.backgroundColor = color;
    // Updating the score 
    updateScore(randomBox);
    
    setTimeout(function () {
      boxes[randomBox].style.backgroundColor = "black";
    }, 600);
    time++;
    timeDisplay.innerText = `Time: ${time}s`;
    
  }, 800);
 if (time === 30) {
   clearInterval(mainLoop);
 }
}


function updateScore(index){
  boxes[index].addEventListener("click", function () {
    if (boxes[index].style.backgroundColor === color) {
      score++;
      scoreDisplay.innerText = `Score: ${score}`;
      console.log(score);
    } else {
      removeEventListener("click", updateScore);
    }
  });
}


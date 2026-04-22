const boxes = document.querySelectorAll(".container");
const startBtn = document.getElementById("startBtn");
const timeDisplay = document.getElementById('time');
const scoreDisplay = document.getElementById('score');

let time = 0;
let mainLoop = null;
let score = 0;


function startGame() {
    if (mainLoop !== null) {
        clearInterval(mainLoop);
    }
    score = 0;
    time = 0;
    mainLoop = setInterval(function () {
      let randomBox = Math.floor(Math.random() * 9);
      boxes[randomBox].style.backgroundColor = "blue";
      
      setTimeout(function () {
        boxes[randomBox].addEventListener("click", function () {
          score++;
          scoreDisplay.innerText = `Score: ${score}`;
          console.log(randomBox);
        });
        boxes[randomBox].style.backgroundColor = "black";
      }, 600);
      time++;
      timeDisplay.innerText = `Time: ${time}`;
      if (time === 30) {
        clearInterval(mainLoop);
      }
    }, 800);
}





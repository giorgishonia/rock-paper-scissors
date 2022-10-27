const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll("#choiceBtn");
let player;
let computer;
let computerScore = 0;
let playerScore = 0;
let result;
let multiplier;
choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();

    resultText.textContent = checkWinner();
}));
function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissor";
            break;
    }
}


function checkWinner() {
    if (player == computer) {
        return "Draw!";
    }
    else if (computer == "rock") {
        return (player == "paper") ?"You Win!" : "You Lose!"
    }
    else if (computer == "paper") {
        return (player == "scissor") ? "You Win!" : "You Lose!"
    }
    else if (computer == "scissor") {
        return (player == "rock") ? "You Win!" : "You Lose!"
    }
    
}

function malerabliad(){
    if (player == computer) {
        return "Draw!";
    }
    else if (computer == "rock") {
        return (player == "paper") ? playerScore += 1 : computerScore += 1
    }
    else if (computer == "paper") {
        return (player == "scissor") ? playerScore += 1 : computerScore += 1
    }
    else if (computer == "scissor") {
        return (player == "rock") ? playerScore += 1 : computerScore += 1
    }

    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
}
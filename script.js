//Game variables
let playerScore = 0;
let computerScore = 0;

//DOM variables
const playerScoreLabel = document.getElementById("playerScore");
const computerScoreLabel = document.getElementById("computerScore");
const scoreBoard = document.querySelector(".scoreBoard");
const result = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreLabel.innerHTML = playerScore;
    computerScoreLabel.innerHTML = computerScore;
    computerScore.innerHTML = 0;
    result.innerHTML = "Click one of the options below to start playing!";
    document.getElementById("reset").classList.add('reset-glow');
    setTimeout(function () {
        document.getElementById("reset").classList.remove('reset-glow');
    }, 750);
}

function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * 3)];
}

function win(playerMove, computerMove) {
    playerScore++;
    playerScoreLabel.innerHTML = playerScore;
    result.innerHTML = playerMove.toUpperCase() + "player".fontsize(3).sub() + " beats against " + computerMove.toUpperCase() + "computer".fontsize(3).sub() + ". You won! :)";
    document.getElementById(playerMove).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(playerMove).classList.remove('green-glow');
    }, 750);
}

function lose(playerMove, computerMove) {
    computerScore++;
    computerScoreLabel.innerHTML = computerScore;
    result.innerHTML = playerMove.toUpperCase() + "player".fontsize(3).sub() + " beats against " + computerMove.toUpperCase() + "computer".fontsize(3).sub() + ". You lost! :(";
    document.getElementById(playerMove).classList.add('red-glow');
    setTimeout(function () {
        document.getElementById(playerMove).classList.remove('red-glow');
    }, 750);
}

function draw(playerMove, computerMove) {
    result.innerHTML = playerMove.toUpperCase() + "player".fontsize(3).sub() + " equals " + computerMove.toUpperCase() + "computer".fontsize(3).sub() + ". Its a draw! :|";
    document.getElementById(playerMove).classList.add('gray-glow');
    setTimeout(function () {
        document.getElementById(playerMove).classList.remove('gray-glow');
    }, 750);
}

function game(playerMove) {
    const computerMove = getComputerMove();
    switch (playerMove + computerMove) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerMove, computerMove);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(playerMove, computerMove);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(playerMove, computerMove);
            break;
    }
}

function main() {
    rock.addEventListener('click', function () {
        game("rock");
    })

    paper.addEventListener('click', function () {
        game("paper");
    })

    scissors.addEventListener('click', function () {
        game("scissors");
    })

    reset.addEventListener('click', function () {
        resetGame();
    })
}

main();
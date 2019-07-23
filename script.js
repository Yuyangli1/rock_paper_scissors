//Variables for results of game   
let playerWins = 0;
let computerWins = 0;
let gameStarted = false;

//Shows game messages on the web page
function startGame() {
    let makeButton = document.querySelector('#start');
    if(!gameStarted) {
        resetGame();
        gameStarted = true;
        newResultLine('Game Started! Good Luck!');        
        makeButton.setAttribute('value', 'Reset Game')
    } else {
        resetGame();
        makeButton.setAttribute('value', 'Start Game')
    }    
}

// Makes computers selection.  
function computerPlay() {
    let randomPick = Math.floor(Math.random()*3)+1;
    if (randomPick == 1) {
        return "rock";
    } else if (randomPick == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
  
// Your turn
function playRound(playerSelection) {
    computerSelection = computerPlay();
    if(!gameStarted) return;    

    if(playerSelection == "rock"){
        if(computerSelection == "paper") {
            newResultLine("You Lose");
            computerTally();
        } else if (computerSelection == "scissors") {
            newResultLine("You Win");
            playerTally();
        } else {
            newResultLine("You Tie");
        }
    } else if (playerSelection == "paper") {
        if(computerSelection == "scissors") {
            newResultLine("You Lose");
            computerTally();            
        } else if (computerSelection == "rock") {
            newResultLine("You Win!");
            playerTally();
        } else {
            newResultLine("You Tie!");
        }
    } else if (playerSelection == "scissors"){
        if(computerSelection == "rock") {
            newResultLine("You Lose!");
            computerTally();
        } else if (computerSelection == "paper") {
            newResultLine("You Win!");            
            playerTally();
        } else {
            newResultLine("You Tie!");
        }
    }

}

//Your score 
function playerTally() {    
    playerWins +=1;    
    let wins = document.querySelector('.playerScore');
    wins.textContent = playerWins;
    winner();
}

//Computer's score
function computerTally() {
    computerWins +=1;
    winner();
    let wins = document.querySelector('.computerScore');
    wins.textContent = computerWins;
}

//Results text
function newResultLine(string) {
    const results = document.createElement('p')
    const paragraphText = document.createTextNode(string);
    results.appendChild(paragraphText);
    document.querySelector('.results').appendChild(results);
    
}

//New Game
function resetGame() {
    playerWins = 0;
    computerWins = 0;
    gameStarted = false;

    let e = document.querySelector('.results')
    let deleteLines = e.lastElementChild;

    while (deleteLines) {        
        e.removeChild(deleteLines);
        deleteLines = document.querySelector('.results').lastElementChild;
    }
}

//Game result
function winner() {
    if(playerWins >= 5) {
        gameStarted = false;
        newResultLine('Congratulations you beat the Computer! Hit reset to try again!');
    } else if(computerWins >= 5) {
        gameStarted = false;
        newResultLine('The computer beat you. Play again?')
    }

}
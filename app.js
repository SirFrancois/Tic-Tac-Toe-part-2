
//used to track the game state through the game//
const statusDisplay = document.querySelector('.game--status');

//use gameActive to pause the game in case of an end scenario
let gameActive = true;


//store our current player here, so we know whos turn
let currentPlayer= "X";

//empty strings in an array used  to easily track played cells and validate the game state later on
let gameState = ["", "", "", "", "", "", "", "", ""];

//Messages to display to the user during the game
const winningmessage= () => 'Player' + ${currentPlayer} + 'has won!';
const drawMessage = () => 'Game ended in a draw!';
const currentPlyerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlyerTurn();
function handleCellPlayed(clickedCell, clickedCellIndex) {


}
function handlePlayerChange(){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}


function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    //This grabs the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
 const winningConditions = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7]
     [2, 5, 8]
     [0, 4, 8]
     [2, 4, 6]
 ]

 function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
/* 
We will check weather there are any values in our game state array 
that are still not populated with a player sign
*/
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
/*
If we get to here we know that the no one won the game yet, 
and that there are still moves to be played, so we continue by changing the current player.
*/
    handlePlayerChange();{currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
}

function handleRestartGame() {

    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}

    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '', b === '' , c === '') {
            constinue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    
    }
    


document.querySelectorAll('.row>Div').forEach(row => row.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
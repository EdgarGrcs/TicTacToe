const playerButton = document.querySelector(".player-button");
const aiButton = document.querySelector(".ai-button");
const easyDif = document.querySelector(".basic-dif");
const impossibleDif = document.querySelector(".impossible-dif");
const gridWindow = document.querySelector(".gridWindow");
const grid = document.querySelectorAll(".grid");
const winnerText = document.querySelector(".winner-text");
const winnerTextWindow = document.getElementById("winner-window");
const winningText = document.querySelector(".winning-text");
const restartButton = document.querySelector(".restart-button");

/* 
To do:
- rewrite game logic:
  - generate grid with array
  - when grid is filled, fill corresponding array index
  - implement basic a.i.
  - implement minimax a.i.
  - fin
*/


const player1 = () => {
    const symbol = "X";
    return { symbol };
};


const gameBoard = (() => {

    const WINNING_COMBO = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const circleSymbol = "O";
    const xSymbol = "X";
    let xTurn = true;
    let counter = 0;
    return { circleSymbol, xSymbol, xTurn, counter, WINNING_COMBO };
})();


const gameFlow = (() => {

    function restartGame() {
        gameBoard.xTurn = true;
        winnerTextWindow.classList.remove("open");
        grid.forEach(grid => {
            grid.textContent = "";
        });

        grid.forEach(gridDiv => {
            gridDiv.addEventListener("click", clickHandler, { once: true })
        });
        gameBoard.counter = 0;
    }


    function clickHandler(e) {
        const grid = e.target;
        const currentSymbol = gameBoard.xTurn ? gameBoard.xSymbol : gameBoard.circleSymbol;
        placeSymbol(grid, currentSymbol);
        if (checkForWin(currentSymbol)) {
            displayMessage(false);
        }
        gameBoard.xTurn = !gameBoard.xTurn;


        gameBoard.counter++;

        if (gameBoard.counter == 9) {
            displayMessage(true);
        }
    }

    function displayMessage(draw) {
        if (draw) {
            winningText.innerText = "Draw!";
        } else {
            winningText.innerText = `${gameBoard.xTurn ? "X" : "O"} Wins!`;
        }
        winnerTextWindow.classList.add("open");
    }

    function placeSymbol(grid, currentSymbol) {
        grid.textContent = currentSymbol;
    }

    function checkForWin(currentSymbol) {
        return gameBoard.WINNING_COMBO.some(combination => {
            return combination.every(index => {
                return grid[index].textContent == currentSymbol;
            })
        })
    }


    return { restartGame };
})();

restartButton.addEventListener("click", gameFlow.restartGame);

gameFlow.restartGame();
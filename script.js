const playerButton = document.querySelector(".player-button");
const aiButton = document.querySelector(".ai-button");
const restartButton = document.querySelector(".restart-button");
const easyDif = document.querySelector(".easy-dif");
const mediumDif = document.querySelector(".medium-dif");
const hardDif = document.querySelector(".hard-dif");
const impossibleDif = document.querySelector(".impossible-dif");


const gridWindow = document.querySelector(".gridWindow");
const grid = document.querySelectorAll(".grid");
const winnerText = document.querySelector(".winner-text");


grid.forEach(gridDiv => {
    gridDiv.addEventListener("click", clickHandler, { once: true })
});

const WINNING_COMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


const circleSymbol = "O";
const xSymbol = "X";
let xTurn = true;


// check for win
// check for draw





//Understand how this works
function clickHandler(e) {
    const winnerText = document.querySelector(".winner-text");
    const grid = e.target;
    const currentSymbol = xTurn ? xSymbol : circleSymbol;
    placeSymbol(grid, currentSymbol);
    if (checkForWin(currentSymbol)) {

    }
    xTurn = !xTurn;
}


function placeSymbol(grid, currentSymbol) {
    grid.textContent = currentSymbol;
}


//understand how this works
function checkForWin(currentSymbol) {

    return WINNING_COMBO.some(combination => {
        return combination.every(index => {
            return grid[index].textContent == currentSymbol;
        })
    })


}


const player1 = () => {

    const symbol = "X";

    return { symbol };

};

const playerOne = player1();

const gameBoard = (() => {


    return {};
})();


const gameFlow = (() => {

    const checkGameFlow = () => {}


    return {};
})();
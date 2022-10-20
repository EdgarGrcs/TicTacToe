const playerButton = document.querySelector(".player-button");
const aiButton = document.querySelector(".ai-button");
const restartButton = document.querySelector(".restart-button");
const easyDif = document.querySelector(".easy-dif");
const mediumDif = document.querySelector(".medium-dif");
const hardDif = document.querySelector(".hard-dif");
const impossibleDif = document.querySelector(".impossible-dif");


const grid = document.querySelectorAll(".grid");

const player1 = () => {

    const symbol = "X";

    return { symbol };

};

const player2 = () => {

    const symbol = "O";

    return { symbol };

};

const playerOne = player1();

const gameBoard = (() => {
    const gameArray = new Array(9);
    const updateArray = () => {}
    return { updateArray };
})();
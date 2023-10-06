/*----- constants -----*/
const COLORS = {
    "0": "white",
    "1": "orange",
    "-1": "black"
};

/*----- state variables -----*/
const state = {
    board: null,
    turn: null,
    winner: null
};

/*----- cached elements  -----*/
const elements = {
    message: document.querySelector("h1"),
    playAgain: document.querySelector("button"),
    markers: document.querySelectorAll("#markers > div")
};

/*----- event listeners -----*/
document.getElementById("markers").addEventListener('click', handleDrop);

/*----- functions -----*/
init();

function init() {
    // TO visualise the board, rotate the array 90 degrees anticlockwise.
    state.board = [
        [0, 0, 0, 0, 0, 0], // column 0
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0], // column  6
    ];

    state.turn = 1;
    state.winner = null;
    render();
}

function handleDrop(event){
    // find the column number
    const columnIndex = [...elements.markers].indexOf(event.target);
    // find the column data
    const column = state.board[columnIndex];
    // find the first empty slot (0) in that column
    const rowIndex = column.indexOf(0);
    // assign that slot to the current player
    column[rowIndex] = state.turn;
    // change to the next player
    state.turn *= -1; // flips from 1 to -1 each turn
    // check for winner
    render();
}

function render() {
    renderBoard();
    renderMessage();
    renderControls();
}

function renderBoard(){
    state.board.forEach(function (column, columnIndex) {
        column.forEach(function (piece, rowIndex) {
            const id = `c${ columnIndex }r${ rowIndex }`;
            const circle = document.getElementById(id);
            circle.style.backgroundColor = COLORS[piece];
        })
    })
}

function renderMessage(){
    console.log("rendering message");
}

function renderControls(){
    console.log("render controls");
}
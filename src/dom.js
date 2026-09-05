import { Player, Ship, Gameboard } from "./ship.js"

const body = document.querySelector("body")
const player1 = new Player("Luke", new Gameboard())
const player2 = new Player("NPC", new Gameboard())

function renderBoard(gameboard, myClass) {
    const board = document.createElement("div")
    board.classList.add("board", myClass)
    for (let column of Object.keys(gameboard.board)) {
        const columnUI = document.createElement("div")
        columnUI.classList.add("column")
        for (let cell of Object.values(Object.values(gameboard.board[column]))) {
            const cellUI = document.createElement("div")
            cellUI.classList.add("cell")
            cellUI.textContent = gameboard.board[column][cell]
            columnUI.appendChild(cellUI)
        }
        board.appendChild(columnUI)
    }
    body.appendChild(board)
}

console.log(renderBoard(player1.gameboard))

export { renderBoard, player1 }
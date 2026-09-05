import { Player, Ship, Gameboard } from "./ship.js"

const player1 = new Player("Luke", new Gameboard())
const player2 = new Player("NPC", new Gameboard())

function renderBoard(gameboard, myClass) {
    const board = document.createElement("div")
    board.classList.add("board", myClass)

    return board
}

console.log(renderBoard(player1.gameboard))

export { renderBoard, player1 }
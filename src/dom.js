import { Player, Ship, Gameboard } from "./ship.js"
import circleSVG from "./svgs/circle.svg"
import xSVG from "./svgs/x.svg"

const body = document.querySelector("body")
const player = new Player("Luke", new Gameboard())
const npc = new Player("NPC", new Gameboard())


function renderBoard(gameboard, myClass) {
    const board = document.createElement("div")
    board.classList.add("board", myClass)
    for (let column of Object.keys(gameboard.board)) {
        const columnUI = document.createElement("div")
        columnUI.classList.add("column")
        for (let cell of Object.keys(gameboard.board[column])) {
            +cell
            const cellUI = document.createElement("div")
            cellUI.classList.add("cell")
            if (gameboard.board[column][cell] instanceof Ship) {
                cellUI.innerHTML = `<img src="${circleSVG}" height=40px width=40px>`
            }
            columnUI.appendChild(cellUI)
            cellUI.addEventListener("click", () => {     
                gameboard.receiveAttack(column, cell)
                console.log(gameboard)
                cellUI.classList.add("attacked")
                cellUI.innerHTML = `<img src="${xSVG}" height=40px width=40px>`
                console.log(cellUI.innerHTML)
            })
        }
        board.appendChild(columnUI)
    }
    body.appendChild(board)
}

function npcMove() {
    const coordX = [Object.keys(npc.gameboard.board)]
    const coordY = [1, 2, 3, 4, 5, 6, 7, 8]
    while (true) {
        const x = Math.floor(Math.random() * 8) 
        const y = Math.floor(Math.random() * 8) 
        if (player.gameboard.board[x][y] !== "X") {
            return [coordX[x], coordY[y]]
        } 
    }
}
console.log(npcMove())

player.gameboard.placeShip(player.gameboard.ships.Carrier, "A", 8)
player.gameboard.placeShip(player.gameboard.ships.Battleship, "C", 8)
player.gameboard.placeShip(player.gameboard.ships.Submarine, "G", 8)
player.gameboard.ships["Cruiser"].rotate()
player.gameboard.placeShip(player.gameboard.ships.Cruiser, "E", 3)
player.gameboard.placeShip(player.gameboard.ships.Destroyer, "E", 8)
    
renderBoard(player.gameboard, "player-board")
renderBoard(npc.gameboard, "npc-board")




export { renderBoard, player }
import { Player, Ship, Gameboard } from "./ship.js"

const body = document.querySelector("body")
const player1 = new Player("Luke", new Gameboard())
const player2 = new Player("NPC", new Gameboard())
const boardToGetShips = new Gameboard()
const ships = boardToGetShips.ships

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
                cellUI.textContent = "o"
            }
            columnUI.appendChild(cellUI)
            cellUI.addEventListener("click", () => {     
                gameboard.receiveAttack(column, cell)
                console.log(gameboard)
                cellUI.classList.add("attacked")
                cellUI.textContent = "x"
            })
        }
        board.appendChild(columnUI)
    }
    body.appendChild(board)
}

player1.gameboard.placeShip(player1.gameboard.ships.Carrier, "A", 10)
player1.gameboard.placeShip(player1.gameboard.ships.Battleship, "C", 10)
player1.gameboard.placeShip(player1.gameboard.ships.Cruiser, "E", 10)
player1.gameboard.placeShip(player1.gameboard.ships.Submarine, "G", 10)
player1.gameboard.placeShip(player1.gameboard.ships.Destroyer, "J", 10)


    
renderBoard(player1.gameboard, "player-board")
renderBoard(player2.gameboard, "npc-board")




export { renderBoard, player1 }
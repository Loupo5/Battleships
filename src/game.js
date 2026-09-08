import { Player, Gameboard, Ship } from "./script.js";
import { renderBoard } from "./dom.js";
import xSVG from "./svgs/x.svg"

const player = new Player("Luke", new Gameboard())
const npc = new Player("NPC", new Gameboard())

export function npcMove(gameboard) {
    const coordX = Object.keys(npc.gameboard.board)
    const coordY = [1, 2, 3, 4, 5, 6, 7, 8]
    while (true) {
        const x = Math.floor(Math.random() * 8) 
        const y = Math.floor(Math.random() * 8) 
        if (gameboard.board[coordX[x]][coordY[y]] !== "X") {
            return [coordX[x], coordY[y]]
        } 
    }
}




player.gameboard.placeShip(player.gameboard.ships.Carrier, "A", 8)
player.gameboard.placeShip(player.gameboard.ships.Battleship, "C", 8)
player.gameboard.placeShip(player.gameboard.ships.Submarine, "G", 8)
player.gameboard.ships["Cruiser"].rotate()
player.gameboard.placeShip(player.gameboard.ships.Cruiser, "E", 3)
player.gameboard.placeShip(player.gameboard.ships.Destroyer, "E", 8)

npc.gameboard.placeShip(npc.gameboard.ships.Carrier, "A", 8)
npc.gameboard.placeShip(npc.gameboard.ships.Battleship, "C", 8)
npc.gameboard.placeShip(npc.gameboard.ships.Submarine, "G", 8)
npc.gameboard.ships["Cruiser"].rotate()
npc.gameboard.placeShip(npc.gameboard.ships.Cruiser, "E", 3)
npc.gameboard.placeShip(npc.gameboard.ships.Destroyer, "E", 8)

const playerCells = renderBoard(player.gameboard, "player-board")
const npcCells = renderBoard(npc.gameboard, "npc-board")

function npcListener(gameboard) {
    npcCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const column = cell.dataset.column
        const row = cell.dataset.cell

        if (gameboard.board[column][row] === "X") return 
            gameboard.receiveAttack(column, row)
            cell.classList.add("attacked")
            cell.innerHTML = `<img src="${xSVG}" height=35px width=35px>`

            const npcCoords = npcMove(gameboard)
            player.gameboard.receiveAttack(npcCoords[0], npcCoords[1])
            
            const playerCell = playerCells.find((cell) => {
                return cell.dataset.column === npcCoords[0] &&
                       cell.dataset.cell === String(npcCoords[1])
            })

            playerCell.classList.add("attacked")
            playerCell.innerHTML = `<img src="${xSVG}" height=35px width=35px>`
    })
})
}
npcListener(npc.gameboard)




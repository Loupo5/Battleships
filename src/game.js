import { Player, Gameboard, Ship } from "./script.js";
import { renderBoard } from "./dom.js";

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

renderBoard(player.gameboard, "player-board", false)
renderBoard(npc.gameboard, "npc-board", true)
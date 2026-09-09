import "./style.css"
import { Game } from "./game.js"
import { Player, Gameboard } from "./script.js"
import { renderBoard } from "./dom.js"

const player = new Player("Luke", new Gameboard())
const npc = new Player("NPC", new Gameboard())

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

const playerCells = renderBoard(player.gameboard, "player-board", true)
const npcCells = renderBoard(npc.gameboard, "npc-board")

const game = new Game(npc.gameboard, player.gameboard, npcCells, playerCells)

game.play()


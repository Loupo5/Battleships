import { Gameboard } from "./ship.js"
let gameboard = new Gameboard

describe("placeShip() correctly checks the bounds of the board", () => {
    test("checks for out of bound input", () => {
        expect(() => {
            gameboard.placeShip(gameboard.ships["Cruiser"], "L", 7)
        }).toThrow()
    })
})



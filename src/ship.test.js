import { Gameboard } from "./ship.js"
let gameboard = new Gameboard

describe("placeShip() correctly checks the bounds of the board", () => {
    test("checks for out of bound input", () => {
        expect(() => {
            gameboard.placeShip(gameboard.ships["Cruiser"], "L", 7)
        }).toThrow()
    }),
    test("cheks for out of bound if boat size goes over bounds (vertical)", () => {
        gameboard.ships["Carrier"].rotation = "V"
        expect(() => {
            gameboard.placeShip(gameboard.ships["Carrier"], "B", 4)
        }).toThrow()
    }),
    test("cheks for out of bound if boat size goes over bounds (horizontal)", () => {
        gameboard.ships["Battleship"].rotation = "H"
        expect(() => {
            gameboard.placeShip(gameboard.ships["Battleship"], "H", 7)
        }).toThrow()
    })

})



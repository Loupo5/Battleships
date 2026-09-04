import { Gameboard, Ship } from "./ship.js"
const gameboard = new Gameboard

test("ship rotate() correctly changes its rotation", () => {
    const ship3 = new Ship(3)
    ship3.rotation = "H"
    ship3.rotate()
    expect(ship3.rotation).toBe("V")
})

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
    test("places ship at given coordinates", () => {
        gameboard.placeShip(gameboard.ships["Cruiser"], "D", 5)
        expect(gameboard.ships["Cruiser"].coords).toEqual(["D", 5])
    })
    test("gameboard locations change to the ship placed", () => {
        gameboard.ships["Battleship"].rotation = "V"
        gameboard.placeShip(gameboard.ships["Battleship"], "E", 6)
        expect(gameboard.board["E"][6]).toEqual(gameboard.ships["Battleship"])
        expect(gameboard.board["E"][5]).toEqual(gameboard.ships["Battleship"])
        expect(gameboard.board["E"][4]).toEqual(gameboard.ships["Battleship"])
        expect(gameboard.board["E"][3]).toEqual(gameboard.ships["Battleship"])
    })
})

describe("receiveAttack() increments hit() of ship", () => {
    test("if no ship at given coords, nothing happens", () => {
        receiveAttack("B", 4)
    })
})



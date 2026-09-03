class Ship {
    constructor(size) {
        this.size = size
        this.hit = 0
        this.sunk = false
        this.coords = null
        this.rotation = "vertical"
    }

    hit() {
        this.hit++
    }

    isSunk() {
        if (this.hit === this.size) {
            this.sunk = true
        }
        return this.sunk
    }
}

class Gameboard {
    constructor() {
        this.board = this.#loadBoard()
        this.ships = this.#loadShips()
    }
    #loadBoard() {
        let board = {}
        const columns = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

        for (let column of columns) {
            board[column] = {}
            for (let row=1; row<=10; row++) {
                board[column][row] = null
            }
        }
        return board
    }

    #loadShips() {
        const Carrier = new Ship(5)
        const Battleship = new Ship(4)
        const Cruiser = new Ship(3)
        const Submarine = new Ship(3)
        const Destroyer = new Ship(2)
        return {Carrier, Battleship, Cruiser, Submarine, Destroyer}
    }

    placeShip(ship, x, y) {
        ship.coords = [x, y]
    }
    
}

let gameboard = new Gameboard
gameboard.board["J"][4] = "jap"


gameboard.placeShip(gameboard.ships["Carrier"], "B", 2)

console.log(gameboard)
console.log(gameboard.ships["Carrier"].coords)
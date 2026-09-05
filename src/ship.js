class Player {
    constructor(name, gameboard) {
        this.name = name
        this.gameboard = gameboard
    }
}


class Ship {
    constructor(size) {
        this.size = size
        this.hits = 0
        this.sunk = false
        this.coords = null
        this.rotation = "V"
    }

    hit() {
        this.hits++
    }

    isSunk() {
        if (this.hits === this.size) {
            this.sunk = true
        }
        return this.sunk
    }
    rotate() {
        if (this.rotation === "V") {
            this.rotation = "H"
            return 
        } this.rotation = "V"
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
        if (x < "A" || x > "J") {
            throw new Error("Out of bound coordinates")
        }
        if (y < 1 || y > 10) {
            throw new Error("Out of bound coordinates")
        }
        if (ship.rotation === "V") {
            if (y - ship.size + 1 < 1) {
                throw new Error("Out of bound coordinates")
            }
        }
        if (ship.rotation === "H") {
            const column = x.charCodeAt(0) - "A".charCodeAt(0) + 1
            if (column + ship.size - 1 > 10) {
                throw new Error("Out of bound coordinates")
            }
        }

        ship.coords = [x, y]

        for (let i=0; i<ship.size; i++) {
            if (ship.rotation === "H") {
                const column = String.fromCharCode(x.charCodeAt(0) + i)
                this.board[column][y] = ship
            } else {
                this.board[x][y - i] = ship
            }
        }
    }

    allShipsSunk() {
        return Object.values(this.ships).every((ship) => ship.sunk === true)
    }

    receiveAttack(x, y) {
        if (x < "A" || x > "J") {
            throw new Error("Out of bound coordinates")
        }
        if (y < 1 || y > 10) {
            throw new Error("Out of bound coordinates")
        }
        if (this.board[x][y] === "X") {
            return 
        }

        if (typeof this.board[x][y] === "object" 
            && this.board[x][y] !== null) {
            const ship = this.board[x][y]
            ship.hit()
            ship.isSunk()
            this.board[x][y] = "X"
        } else {
            this.board[x][y] = "X"
        }
    }
    
}

let gameboard = new Gameboard


gameboard.placeShip(gameboard.ships["Cruiser"], "F", 6)
console.log(gameboard)
console.log(gameboard.ships["Carrier"].coords)

export { Gameboard, Ship, Player }
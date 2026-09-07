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
        const columns = ["A", "B", "C", "D", "E", "F", "G", "H"]

        for (let column of columns) {
            board[column] = {}
            for (let row=1; row<=8; row++) {
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
        if (x < "A" || x > "H") {
            return
        }
        if (y < 1 || y > 8) {
            return
        }
        if (ship.rotation === "V") {
            if (y - ship.size + 1 < 1) {
                return
            }
        }
        if (ship.rotation === "H") {
            const column = x.charCodeAt(0) - "A".charCodeAt(0) + 1
            if (column + ship.size - 1 > 8) {
                return
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
        if (x < "A" || x > "H") {
            return
        }
        if (y < 1 || y > 8) {
            return
        }
        if (this.board[x][y] === "X") {
            return 
        }

        if (typeof this.board[x][y] === "object" 
            && this.board[x][y] !== null) {
            this.board[x][y].hit()
            this.board[x][y].isSunk()
            this.board[x][y] = "X"
        } else {
            this.board[x][y] = "X"
        }
    }
}





export { Gameboard, Ship, Player }
class Ship {
    constructor(size) {
        this.size = size
        this.hit = 0
        this.sunk = false
    }

    hit() {
        if (shipIsHit) {
            this.hit++
        }
        return 
    }

    isSunk() {
        if (this.hit === this.size) {
            this.sunk = true
        }
        return 
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
    
}

let gameboard = new Gameboard
gameboard.board["J"][4] = "jap"


gameboard.ships["Submarine"].sunk = true

console.log(gameboard.ships)
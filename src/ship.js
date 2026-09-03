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
    
}

let gameboard = new Gameboard
gameboard.board["J"][4] = "jap"

console.log(gameboard.board)
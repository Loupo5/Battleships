class Ship {
    constructor(size) {
        this.size = size
        this.hit = 0
        this.sunk = false
    }

    hit() {

    }

    isSunk() {
        if (this.hit === this.size) {
            this.sunk = true
        }
        return 
    }
}
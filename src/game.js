import xSVG from "./svgs/x.svg"


function npcMove(gameboard) {
    const coordX = Object.keys(gameboard.board)
    const coordY = [1, 2, 3, 4, 5, 6, 7, 8]
    while (true) {
        const x = Math.floor(Math.random() * 8) 
        const y = Math.floor(Math.random() * 8) 
        if (gameboard.board[coordX[x]][coordY[y]] !== "X") {
            return [coordX[x], coordY[y]]
        } 
    }
}


export class Game {
    constructor(enemyBoard, playerBoard, npcCells, playerCells) {
        this.enemyBoard = enemyBoard
        this.playerBoard = playerBoard
        this.npcCells = npcCells
        this.playerCells = playerCells
    }

    #finalize() {
        this.enemyBoard.resetBoard()
        this.npcCells.forEach((cellUI) => {
            cellUI.textContent = ""
            cellUI.classList.remove("attacked", "ship")
    })

        this.playerBoard.resetBoard()
        this.playerCells.forEach((cellUI) => {
            cellUI.textContent = ""
            cellUI.classList.remove("attacked", "ship")
    })
    }

    play() {
        this.npcCells.forEach((cell) => {
            cell.addEventListener("click", () => {
            const column = cell.dataset.column
            const row = cell.dataset.cell

            if (this.enemyBoard.board[column][row] === "X") return 

            this.enemyBoard.receiveAttack(column, row)
            cell.classList.add("attacked")            
            cell.innerHTML = `<img src="${xSVG}" height=35px width=35px>`

        const npcCoords = npcMove(this.enemyBoard)
        this.playerBoard.receiveAttack(npcCoords[0], npcCoords[1])
        
        const playerCell = this.playerCells.find((cell) => {
            return cell.dataset.column === npcCoords[0] &&
                   cell.dataset.cell === String(npcCoords[1])
        })

        playerCell.classList.add("attacked")
        playerCell.innerHTML = `<img src="${xSVG}" height=35px width=35px>`

        console.log([this.enemyBoard, this.playerBoard])
        if (this.enemyBoard.allShipsSunk()) {
            alert("player won")
            this.#finalize()
            return
        }
        if (this.playerBoard.allShipsSunk()) {
            alert("npc won")
            this.#finalize()
            return
        }
    })
    })
    }
}





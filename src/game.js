import { renderBoard } from "./dom.js";
import xSVG from "./svgs/x.svg"



export function npcMove(gameboard) {
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

export function game(enemyBoard, playerBoard, npcCells, playerCells) {

    npcCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const column = cell.dataset.column
        const row = cell.dataset.cell

        if (enemyBoard.board[column][row] === "X") return 
            enemyBoard.receiveAttack(column, row)
            cell.classList.add("attacked")            
            cell.innerHTML = `<img src="${xSVG}" height=35px width=35px>`

            const npcCoords = npcMove(enemyBoard)
            playerBoard.receiveAttack(npcCoords[0], npcCoords[1])
            
            const playerCell = playerCells.find((cell) => {
                return cell.dataset.column === npcCoords[0] &&
                       cell.dataset.cell === String(npcCoords[1])
            })

            playerCell.classList.add("attacked")
            playerCell.innerHTML = `<img src="${xSVG}" height=35px width=35px>`
    })
})
}




import circleSVG from "./svgs/circle.svg"
import { Ship } from "./script.js"


function renderBoard(gameboard, myClass, showShips) {
    const cells = []

    const board = document.createElement("div")
    board.classList.add("board", myClass)
    for (let column of Object.keys(gameboard.board)) {
        const columnUI = document.createElement("div")
        columnUI.classList.add("column")
        for (let cell of Object.keys(gameboard.board[column])) {
            +cell
            const cellUI = document.createElement("div")
            cellUI.classList.add("cell")
            cellUI.dataset.column = column
            cellUI.dataset.cell = cell
            
            if (gameboard.board[column][cell] instanceof Ship) {
                if (showShips) {
                    cellUI.innerHTML = `<img src="${circleSVG}" height=40px width=40px>`
                }
                cellUI.classList.add("ship")
            }

            columnUI.appendChild(cellUI)
            cells.push(cellUI)
        }
        board.appendChild(columnUI)
    }
    document.body.appendChild(board)
    return cells
}


    

export { renderBoard }
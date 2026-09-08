import { Player, Ship, Gameboard } from "./script.js"
import circleSVG from "./svgs/circle.svg"
import xSVG from "./svgs/x.svg"
import "./game.js"
import { npcMove } from "./game.js"



function renderBoard(gameboard, myClass) {
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
                cellUI.innerHTML = `<img src="${circleSVG}" height=40px width=40px>`
            }
            columnUI.appendChild(cellUI)
            cells.push(cellUI)
                /*cellUI.addEventListener("click", () => { 
                    if (gameboard.board[column][cell] === "X") return 
                    gameboard.receiveAttack(column, cell)
                    cellUI.classList.add("attacked")
                    cellUI.innerHTML = `<img src="${xSVG}" height=35px width=35px>`
                    const npcCoords = npcMove(gameboard)
                    gameboard.receiveAttack(npcCoords[0], npcCoords[1])
                    
                    npcCell.classList.add("attacked")
                    npcCell.innerHTML = `<img src="${xSVG}" height=35px width=35px>`
                    console.log(gameboard)
                })*/
            
            
        }
        board.appendChild(columnUI)
    }
    document.body.appendChild(board)
    return cells
}


    

export { renderBoard }
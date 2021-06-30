import { Sudoku } from "./Sudoku.js"
import { gameInterface } from "./GameInterface.js"

class Main{
    constructor(){
        this.interface = gameInterface;
        this.createNewSudoku();
    }

    createNewSudoku(){
        this.sudoku = new Sudoku({
            items: document.querySelectorAll('.sudoku__item'),
            keyNumbers: document.querySelectorAll('.key-board__key'),
            removeButton: document.querySelector('.key-board__remove'),
            boardNumber: 1
        });
    }
}

export const main = new Main(); 
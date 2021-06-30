import { gameInterface } from "./GameInterface.js"
import { Sudoku } from "./Sudoku.js"

class Main{
    constructor(){
        this.interface = gameInterface;
    }
}

export const main = new Main(); 
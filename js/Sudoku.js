import { Attributes } from "./Attributes.js";
import { BOARDS } from "./Boards.js";
import { PlaceTheBoard } from "./PlaceTheBoard.js";
import { selectField } from "./SelectField.js";

class Sudoku{
    constructor({items}){
        this.items = items;
        this.boards = BOARDS;
        this.selectField = selectField;
        this.actualItem = null;
        this.initSudoku();
    }

    initSudoku(){
        this.attributes = new Attributes();
        this.attributes.createAttributes(this.items);
        
        this.placeTheBoard = new PlaceTheBoard();
        this.placeTheBoard.place(this.items, this.boards[0]);

        this.items.forEach(item => item.addEventListener('click', ()=> this.checkField(item)));
    }

    checkField(item){
        this.actualItem = item;
        this.selectField.removeSelectClass(this.items);
        this.selectField.addSelectClass(item);
        
    }
}

export const sudoku = new Sudoku({
    items: document.querySelectorAll('.sudoku__item'),
});
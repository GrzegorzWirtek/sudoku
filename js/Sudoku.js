import { Attributes } from "./Attributes.js";
import { BOARDS } from "./Boards.js";
import { PlaceTheBoard } from "./PlaceTheBoard.js";
import { selectField } from "./SelectField.js";
import { check } from "./Check.js";
import { animation } from "./Animation.js";

class Sudoku{
    constructor({items, keyNumbers, removeButton}){
        this.items = items;
        this.keyNumbers = keyNumbers;
        this.removeButton = removeButton;
        this.check = check;
        this.animation = animation;

        this.boards = BOARDS;
        this.selectField = selectField;
        this.actualItem = null;
        this.initSudoku();
        this.keyNumberSelect();
    }

    initSudoku(){
        this.attributes = new Attributes();
        this.attributes.createAttributes(this.items);
        
        this.placeTheBoard = new PlaceTheBoard();
        this.placeTheBoard.place(this.items, this.boards[2]);

        this.items.forEach(item => {
            if(!item.classList.contains('hard-number')){
                item.addEventListener('click', ()=> this.chooseField(item))
            }
        });
    }

    chooseField(item){
        this.actualItem = item;
        this.selectField.removeSelectClass(this.items);
        this.selectField.addSelectClass(item);
    }

    keyNumberSelect(){
        this.keyNumbers.forEach(key => key.addEventListener('click', ()=> this.writeNumer(key.textContent)));
        this.removeButton.addEventListener('click', ()=> this.removeNumber());
    }

    writeNumer(number){
        if(this.actualItem){
           this.actualItem.textContent = number;
           
          if(this.check.checkIsComplete(this.actualItem, this.items)){
            this.showIsCorrect(this.check.checkIsComplete(this.actualItem, this.items));
          }     
        } 
        this.removeSelectColor();
    }
    
    showIsCorrect(items){
        if(items.elementsRow){
            this.animation.animateCorrestRows(items.elementsRow);
        }
        if(items.elementsCol){
            this.animation.animateCorrestRows(items.elementsCol);
        }
        if(items.elements){
            this.animation.animateCorrestRows(items.elements);
        }
    }

    removeNumber(){
        if(this.actualItem){
            this.actualItem.textContent = '';
            this.removeSelectColor();
        }
    }

    removeSelectColor(){
        if(this.actualItem){
            this.actualItem.classList.remove('select');
            this.actualItem = null;
        }
    }
}

export const sudoku = new Sudoku({
    items: document.querySelectorAll('.sudoku__item'),
    keyNumbers: document.querySelectorAll('.key-board__key'),
    removeButton: document.querySelector('.key-board__remove')
});
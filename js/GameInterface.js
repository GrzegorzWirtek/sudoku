import { BOARDS } from "./Boards.js";
import { Sudoku } from "./Sudoku.js"

const INTERFACE_CONTAINER = document.querySelector('.interface');
const SUDOKU_CONTAINER = document.querySelector('.sudoku-container');
const SELECT_NUMBERS = document.querySelectorAll('.select-board__level-number');
const ANIMATION_TRANSITION_CONTAINER = document.querySelector('.animation-transition');
const ANIMATION_TRANSITION_LEFT = document.querySelector('.animation-transition__left');
const ANIMATION_TRANSITION_RIGHT = document.querySelector('.animation-transition__right');
const CORRECT_CONTAINER = document.querySelector('.correct');
const NEXT_SUDOKU_BUTTON = document.querySelector('.correct__button');
const ANIMATION_TIME = 1000;

class GameInterface{
    constructor(){
        this.boards = BOARDS;
        this.selectedBoardNumber = 0;
        this.interfaceContainer = INTERFACE_CONTAINER;
        this.sudokuContainer = SUDOKU_CONTAINER;
        this.selectNumbers = SELECT_NUMBERS;
        this.animationContainer = ANIMATION_TRANSITION_CONTAINER;
        this.animationLeft = ANIMATION_TRANSITION_LEFT
        this.animationRight = ANIMATION_TRANSITION_RIGHT;
        this.animationTime = ANIMATION_TIME;
        this.correctConainer = CORRECT_CONTAINER;
        this.nextSudokuButton = NEXT_SUDOKU_BUTTON;

        this.actualLevelItem = null;
        this.actualLevelItemIndex = null;

        this.goToInterface = () => this.goToIterfaceFn();
        this.selectBoard();
    }

    selectBoard(){
        this.selectNumbers.forEach((number, index) => {
            number.addEventListener('click', ()=>{
                if(!number.classList.contains('not-active')){
                    this.newSudoku(index);
                    this.animationStart();
                    this.makeNotActive(number);
                    setTimeout(()=>{
                        this.hideInterface();
                        this.showSudoku();
                     }, this.animationTime/2);  
                }
            })
        })
    };

    makeNotActive(item){
        item.classList.add('not-active');
        item.classList.remove('interface-hover');
        item.style.cursor = 'auto';
    }

    newSudoku(index){
        this.selectedBoardNumber = index;
        this.sudoku = new Sudoku({
            items: document.querySelectorAll('.sudoku__item'),
            keyNumbers: document.querySelectorAll('.key-board__key'),
            removeButton: document.querySelector('.key-board__remove'),
            boardNumber: this.selectedBoardNumber,
        });
        this.sudoku.resetSudoku();
        this.sudoku.keyNumberSelect();
        this.sudoku.initSudoku();
    }

    animationStart(){
        this.animationContainer.style.display = 'block';
        this.animationRight.style.animationPlayState = 'running';
        this.animationLeft.style.animationPlayState = 'running';
        setTimeout(()=>{
            this.animationContainer.style.display = 'none';
            this.animationRight.style.animationPlayState = 'paused';
        this.animationLeft.style.animationPlayState = 'paused';
        }, this.animationTime);
    }

    showInterface(){
        this.interfaceContainer.style.display = 'block';
    }

    hideInterface(){
        this.interfaceContainer.style.display = 'none';
    }

    showSudoku(){
        this.sudokuContainer.style.display = 'flex';
        this.sudokuContainer.style.filter = 'none';
    }

    hideSudoku(){
        this.sudokuContainer.style.display = 'none';
    }

    showEndPage(){  
        this.correctConainer.style.display = 'flex';
        setTimeout(()=>{
            this.correctConainer.style.opacity = '1';
            this.sudokuContainer.style.filter = 'blur(2px)';
        }, this.animationTime);
        this.nextSudokuButton.addEventListener('click', this.goToInterface);
    }

    hideEndPage(){  
        this.correctConainer.style.display = 'none';
        this.correctConainer.style.opacity = '0';
    }

    goToIterfaceFn(){
        this.nextSudokuButton.removeEventListener('click', this.goToInterface);
        this.animationStart();
        setTimeout(()=>{
            this.showInterface();
            this.hideSudoku();
            this.hideEndPage();
         }, this.animationTime/2);
    }
}

export const gameInterface = new GameInterface();
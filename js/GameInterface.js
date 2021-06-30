const INTERFACE_CONTAINER = document.querySelector('.interface');
const SUDOKU_CONTAINER = document.querySelector('.sudoku-container');
const SELECT_NUMBERS = document.querySelectorAll('.select-board__level-number');
const ANIMATION_TRANSITION_CONTAINER =  document.querySelector('.animation-transition');
const ANIMATION_TRANSITION_LEFT =  document.querySelector('.animation-transition__left');
const ANIMATION_TRANSITION_RIGHT =  document.querySelector('.animation-transition__right');
const ANIMATION_TIME = 1000;

class GameInterface{
    constructor(){
        this.interfaceContainer = INTERFACE_CONTAINER;
        this.sudokuContainer = SUDOKU_CONTAINER;
        this.selectNumbers = SELECT_NUMBERS;
        this.animationContainer = ANIMATION_TRANSITION_CONTAINER;
        this.animationLeft = ANIMATION_TRANSITION_LEFT
        this.animationRight = ANIMATION_TRANSITION_RIGHT;
        this.animationTime = ANIMATION_TIME;
        this.selectBoard();
    }

    selectBoard(){
        this.selectNumbers.forEach((number, index) => number.addEventListener('click', ()=> {
            this.animationStart();
            console.log(index);
        }))
    }

    animationStart(){
        this.animationContainer.style.display = 'block';
        this.animationRight.style.animationPlayState = 'running';
        this.animationLeft.style.animationPlayState = 'running';
        setTimeout(()=>{
            this.animationContainer.style.display = 'none';
        }, this.animationTime);
        setTimeout(()=>{
           this.hideInterface();
           this.showSudoku();
           
        }, this.animationTime/2);
    }

    hideInterface(){
        this.interfaceContainer.style.display = 'none';
    }

    showSudoku(){
        this.sudokuContainer.style.display = 'flex';
    }
}

export const gameInterface = new GameInterface();
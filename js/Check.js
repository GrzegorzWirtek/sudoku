class Check{
    checkIsComplete(actualItem, items){
        let actual = actualItem.dataset.position;
        let actualCol = actual[0];
        let actualRow = actual[2];
        let elementsRow;
        let elementsCol;
        let elements;
        
        if(
            this.checkRowOrCol(items, 2, actualRow) ||
            this.checkRowOrCol(items, 0, actualCol) ||
            this.checkSquare(actualCol, actualRow, items)
        ){
            elementsRow = this.checkRowOrCol(items, 2, actualRow);
            elementsCol = this.checkRowOrCol(items, 0, actualCol);
            elements = this.checkSquare(actualCol, actualRow, items);
            
            return {elementsRow, elementsCol, elements};
        }
    }

    checkSquare(actualCol, actualRow, items){     
        let row, col, limitI, limitJ;
        let counter = 0;
        let numbers = [];
        let elements = [];
        if(actualCol<=2 && actualRow<=2){
            col = 2;
            row = 2;
        }else if(actualCol<=5 && actualRow<=2){
            col = 5;
            row = 2;
        }else if(actualCol<=8 && actualRow<=2){
            col = 8;
            row = 2;
        }else if(actualCol<= 2 && actualRow<=5){
            col = 2;
            row = 5;
        }else if(actualCol<= 2 && actualRow<=8){
            col = 2;
            row = 8;
        }else if(actualCol<= 5 && actualRow<=5){
            col = 5;
            row = 5;
        }else if(actualCol<= 5 && actualRow<=8){
            col = 5;
            row = 8;
        }else if(actualCol<= 8 && actualRow<=5){
            col = 8;
            row = 5;
        }
        else if(actualCol<= 8 && actualRow<=9){
            col = 8;
            row = 8;
        }
        limitI = col - 2;
        limitJ = row - 2;
        for(let i = col; i>=limitI; i--){
            for(let j = row; j>=limitJ; j--){
                let item = document.querySelector(`[data-position = "${i},${j}"]`);
                elements.push(item);
                if(item.textContent !== ''){
                    numbers.push(item.textContent);
                }
            }
        }
        if(numbers.length < 9) return;
        
        numbers.sort();
            for(let i =1; i<10; i++){
                if(parseInt(numbers[i-1]) === i){
                    counter++;
                }
            }
        if(counter > 8){    
            return elements;
        }else{
            return false;
        }
    }

    checkRowOrCol(items, rowOrCol, actualRow){
        let numbers = [];
        let elements = [];
        let counter = 0;
        items.forEach(item => {
            let row = item.dataset.position[rowOrCol];
            if(row === actualRow){
               if(item.textContent !== ''){
                numbers.push(item.textContent);
                elements.push(item);
               }
            }
        }) 
        
        if(numbers.length < 9) return;
        else{
            numbers.sort();
            for(let i =1; i<10; i++){
                if(parseInt(numbers[i-1]) === i){
                    counter++;
                }
            }
        }
        if(counter > 8){
            return elements;
        }else{
            return false;
        }
    }
}

export const check = new Check();
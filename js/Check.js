class Check{
    checkIsComplete(actualItem, items){
        let actual = actualItem.dataset.position;
        let actualCol = actual[0];
        let actualRow = actual[2];
        let elementsRow;
        let elementsCol;

        if(
            this.checkRowOrCol(items, 2, actualRow) ||
            this.checkRowOrCol(items, 0, actualCol)
        ){
            elementsRow = this.checkRowOrCol(items, 2, actualRow);
            elementsCol = this.checkRowOrCol(items, 0, actualCol);
            return {elementsRow, elementsCol};
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
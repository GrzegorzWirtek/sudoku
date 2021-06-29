export class Attributes{
    createAttributes(items){
        let counter = 0;
        for(let row = 0; row < 9; row++){
            for(let col = 0; col <9; col++){             
                items[counter].setAttribute('data', [col, row]);
                counter++;
            }
        }   
    }
}
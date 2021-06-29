export class PlaceTheBoard{
    place(items, board){ 
        board.forEach(field => {
            let item = document.querySelector(`[data="${field.x.toString()},${field.y.toString()}"]`);
            item.textContent = field.value;
            item.classList.add('hard-number');
        })
        items.forEach(item => {
            if(!item.classList.contains('hard-number')){
                item.classList.add('add-hover');                
            }
        })
    }
}
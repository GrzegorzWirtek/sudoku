export class PlaceTheBoard{
    place(items, board){ 
        board.forEach(field => {
            items.forEach(item => {
                if(
                    item.getAttribute('data-x') == field.x &&
                    item.getAttribute('data-y') == field.y
                )
                item.textContent = field.value;
            })
        }) 
    }
}
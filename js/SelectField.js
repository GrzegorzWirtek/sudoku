class SelectField{
    addSelectClass(item){
        if(!item.classList.contains('hard-number')){
            item.classList.add('select');
        }
    }
    removeSelectClass(items){
        items.forEach(item => item.classList.remove('select'));
    }
}

export const selectField = new SelectField();
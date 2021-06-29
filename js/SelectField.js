class SelectField{
    addSelectClass(item){
        item.classList.add('select');
    }
    removeSelectClass(items){
        items.forEach(item => item.classList.remove('select'));
    }
}

export const selectField = new SelectField();
class Animation{
    animateCorrestRows(items){
        let timeStart = 50;
        let timeEnd = 450;
        items.forEach(item => {
            setTimeout(()=>{
                item.classList.add('animation');
            }, timeStart)
            setTimeout(()=> {
                item.classList.remove('animation');
            }, timeEnd);
            timeStart += 15;
            timeEnd += 15;
        });
    }
}

export const animation = new Animation();
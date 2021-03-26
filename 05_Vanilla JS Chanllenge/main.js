const panels = document.querySelectorAll('.panel');
const open = document.querySelector('.open')

/*做一個函式check arr裡面有沒有相同值*/
function checkElem(arr1, val){
    return arr1.some(arrVal => val === arrVal);
}


/* 增加open的className讓圖片擴張 */
function toggleOpen(){
    let arr = []//訂一個空arr接收每個panel的class值是否含open
    panels.forEach(panel => arr.push((panel.classList.value.includes('open'))));

    if (this.classList.value.includes('open')){//點擊回復原本樣子，如果目前案的這個有class=open就移除
        this.classList.remove('open');
    }else if (checkElem(arr, true)) {//先check panel中有沒有開啟的，如果有就移除 並添加目前的open
        panels.forEach(panel => panel.classList.remove('open'));
        this.classList.toggle('open');
    }else{
        this.classList.toggle('open');
    }
}

/* 添加 open-active的className 讓上下字幕進來*/
function toggleActive(e){
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    };
}


/*--
監聽click後啟動toggleOpenFuncion添加open的className，
添加open;
--*/
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

/*
當以上結束後監聽transitionend促發toggleActive函式，
*/
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
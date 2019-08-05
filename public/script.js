console.log('test!')

window.onload = () => {
    autoCheckRecurringItems();
};


let autoCheckRecurringItems = () => {
    let checkBtns = document.getElementsByClassName('recurring');
    if(checkBtns){
        for (let i=0; i < checkBtns.length; i++){
            if(checkBtns[i].classList.contains("On")){
                checkBtns[i].checked = true;
            } else {
                checkBtns[i].checked = false;
            };
        };
    };
}
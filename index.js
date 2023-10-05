const countValue = document.querySelector('#counter');

const increment = () => {
    // get the value from ui -->> fetch the value (getter & setter )
    let  value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value
    countValue.innerText = value;
};

 
function decrement(){
    // get the value from ui
    let  value = parseInt(countValue.innerText);
    // update the value
    value = value - 1;
    // set the value
    countValue.innerText = value;
};
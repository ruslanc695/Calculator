let inputLabel = document.getElementById('inputLabel');



function pushBtn(obj) {
    let pushed = obj.innerHTML;


    if (pushed == '=') {
        //calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    } else if (pushed == 'AC') {
        //All clear
        inputLabel.innerHTML = '0';
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;
        } else {
            inputLabel.innerHTML += pushed;
        }
    }


}
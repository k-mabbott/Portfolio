
let displayDiv = document.getElementById('display')
let num1 = ''
let op = ''
let num2 = ''
// let inputs = ['', '', '']
let isNum1 = true

function press(num){
    if (isNum1){
        num1 += num
    } else {
        num2 += num
    }
    if (display.innerText == 0){
    displayDiv.innerText = num;
    } else {
        displayDiv.innerText += num
    }
}

function setOP(operator){
    op = operator;
    displayDiv.innerText = 0;
    isNum1 = false;
    return op;
}

function calculate(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = 0
    switch(op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 + -num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }
    num1 = result;
    console.log(num1, op, num2, result);
    displayDiv.innerText = result;
}

function clr(){
    displayDiv.innerText = 0
    // result = 0;
    op = ''
    num1 = ''
    num2 = ''
    isNum1 = true;
}

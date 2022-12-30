const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operate');
const clearBtn = document.querySelector('#clear');
const resultBtn = document.querySelector('#result');
const pastDisplay = document.querySelector('#pastDisplay');
const display = document.querySelector('#display');
const decimalBtn = document.querySelector('#decimal');

let pastValue = '';
let currentValue = "";
let currentOperator = '';
let result = null;

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a- b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function operate(fn, a, b){
    switch(fn){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}
function clear(){
    pastValue = '';
    currentValue = "";
    currentOperator = '';
    result = null;
    display.innerText = '0';
    pastDisplay.innerText = '';
}
function checkDecimal(number){
    return number === '.';
}

operators.forEach((operator) => operator.onclick = (e) =>{
    currentOperator = e.target.value;
    pastValue = currentValue;
    currentValue = '';
    if (pastValue === "") return pastDisplay.innerText = '0' + " " + currentOperator;
    pastDisplay.innerText = pastValue + " " + currentOperator;
})

numbers.forEach((number) => number.onclick = (e) =>{
    if (currentValue == result){
        currentValue = ''
        currentValue += e.target.value;
        display.innerText = currentValue;
    } else {
        currentValue += e.target.value;
        display.innerText = currentValue;
    }
})
resultBtn.onclick = () =>{ 
    if (pastValue === '') return;
    result = operate(currentOperator,pastValue * 1, currentValue * 1);
    display.innerText = result;
    pastDisplay.innerText = pastValue + " " + currentOperator + " " + currentValue + "  =" ;
    currentValue = result;
    pastValue = '';
}
clearBtn.onclick = clear;
decimalBtn.onclick = (e) =>{
    if(currentValue.split('').find(checkDecimal) === '.') return;
    currentValue += e.target.value;
}


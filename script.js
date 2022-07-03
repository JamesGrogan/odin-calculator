display = document.querySelector("#display");
let displayValue;
let value1;
let value2;
let currentOperator;

function updateDisplay(newValue) {
    displayValue = display.innerText;
    displayValue += newValue;
    display.innerText = displayValue;
}

function clearDisplay() {
    display.innerText = "";
}

function resetDisplayValue() {
    displayValue = 0;
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(a, b, operand) {
    switch(operand) {
        case "+":
            return(add(a,b));
        case "-":
            return(subtract(a,b));
        case "*":
            return(multiply(a,b));
        case "/":
            return(divide(a,b));
    }
}

numberButtons = document.querySelectorAll(".number-button");
for (let i = 0; i < numberButtons.length; i ++) {
    numberButtons[i].addEventListener("click", () => {
        updateDisplay(numberButtons[i].innerText);
    })
}

clearDisplayButton = document.querySelector("#clear-button")
clearDisplayButton.addEventListener("click", clearDisplay);

operatorButtons = document.querySelectorAll(".operator");
for (let i = 0; i <operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", () => {
        currentOperator = operatorButtons[i].innerText;
        value1 = displayValue;
        clearDisplay();
        resetDisplayValue();
    })
}

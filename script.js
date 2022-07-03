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
        case "X":
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

decimalButton = document.querySelector("#decimal-button");
decimalButton.addEventListener("click", () => {
    if (displayValue.includes(".")) {
        return;
    } else {
        updateDisplay(decimalButton.innerText);
    }
})

clearDisplayButton = document.querySelector("#clear-button")
clearDisplayButton.addEventListener("click", () => {
    clearDisplay();
    resetDisplayValue();
});

operatorButtons = document.querySelectorAll(".operator");
for (let i = 0; i <operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", () => {
        currentOperator = operatorButtons[i].innerText;
        value1 = Number(displayValue);
        clearDisplay();
        resetDisplayValue();
    })
}

equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener("click", () => {
    value2 = Number(displayValue);
    displayValue = operate(value1, value2, currentOperator);
    display.innerText = displayValue;
    resetDisplayValue();
})

//TODO: Make it so that the display resets on clicking a new number after equals
//TODO: Make it so users can string multiple operands together
    // possibly do this by checking if user has added 2 or more operators and evaluation?
display = document.querySelector("#display");
let displayValue;

function updateDisplay(newValue) {
    displayValue = display.innerText;
    displayValue += newValue;
    display.innerText = displayValue;
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


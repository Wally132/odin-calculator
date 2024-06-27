// Establish 3 main variables for calculator.
let num1 = "";
let num2 = "";
let operator = "";

// Functions for each operator.

function add(num1, num2) {
   return num1 + num2;
};

function subtract(num1, num2) {
   return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    if (num2 === 0) {
        return "wtf";
    } return num1 / num2;
};

//Operate function - To be used with equal button.

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result
    switch (operator) {
        case "+":
            result = add(num1, num2);
        break;
        case "-":
            result = subtract(num1, num2);
        break;
        case "*":
            result = multiply(num1, num2);
        break;
        case "/":
            result = divide(num1, num2);
        break;
        default:
            result = "Invalid";
    }
    return result;
};

//Loop through each number button and add event listeners
const displayPanel = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (displayPanel.value.length < 9) {
            displayPanel.value += button.textContent;
            if (operator === "") {
                num1 += button.textContent;
            } else num2 += button.textContent;
        }
    });
});


const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (num1 !== "") {
        operator = button.textContent;
        displayPanel.value = button.textContent;
        }
    });
});

const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    displayPanel.value = "";
});

const equalButton = document.getElementById("calculate");
equalButton.addEventListener("click", () => {
    if (num1 !== "" && operator !== "" && num2 !== "") {
        displayPanel.value = operate(num1, operator, num2);
        num1 = displayPanel.value;
        num2 = "";
        operator = "";
    }
});

const negativeButton = document.getElementById("negative");
negativeButton.addEventListener("click", () => {
    if (displayPanel !== "") {
        let currentValue = parseFloat(displayPanel.value);
        displayPanel.value = -currentValue;
    } if (operator === "") {
        num1 = displayPanel.value;
    } else {
        num2 = displayPanel.value;
    }
});
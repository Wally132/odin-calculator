// Establish 3 main variables for calculator.
let num1 = "";
let num2 = "";
let operator = "";


// Functions for each operator.

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    if (num2 === 0) {
        return "ya can't";
    } else {
        return num1 / num2;
    }
}

//Operate function - To be used with equal button.

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
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
            result = "I dunno bub";
    }
    return result;
};

//Loop through each number button and add event listeners

const displayPanel = document.getElementById("display");
const numberButton = document.querySelectorAll(".number");

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        if (displayPanel.value.length < 9) {
            displayPanel.value += button.textContent;
        if (operator === "") {
            num1 += button.textContent;
        } else {
            num2 += button.textContent;
        }
        }
    });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (!num1 == "") {
            operator = button.textContent;
            displayPanel.value = button.textContent;
        }
    });
});


// Clear button to reset all variables.

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    let num1 = "";
    let num2 = "";
    displayPanel.value = "";
    operator = "";
});


// Check if num1, operator, and num2 have values. 
// If true - run operate function.
// num1 turns into new number after function.
// num2 resets.
// operator resets.

const equalButton = document.getElementById("calculate");
equalButton.addEventListener("click", () => {
    if (num1 !== "" && operator !== "" && num2 !== "") {
        displayPanel.value = operate(num1, operator, num2);
        num1 = displayPanel.value;
        num2 = "";
        operator = "";
    }
});

// Negative button to convert current number to negative.
// Checks if display panel is empty.
// If true - converts current number string into number value as new currentValue variable.
// Then converts to negative.
// If operator is empty - The number in display becomes num1.
// Then num2 after operator is selected.

const negativeButton = document.getElementById("negative");
negativeButton.addEventListener("click", () => {
    if (displayPanel.value !== "") {
        let currentValue = parseFloat(displayPanel.value);
        displayPanel.value = -currentValue;
    } if (operator === "") {
        num1 = displayPanel.value;
    } else {
        num2 = displayPanel.value;
    }
})



// Decimal button to add decimal point to the current number.
// Check if operator is empty - This is num1;
// If num1 does not include a . then it is usable. 
// Clicking the button appends a decimal to display panel which is num1;
// Same for num2 after an operator is selected.

const decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", () => {
    if (operator === "") {
        if (!num1.includes(".")) {
            num1 += decimalButton.textContent;
            displayPanel.value = num1;
        } 
    } else {
        if (!num2.includes(".")) {
            num2 += decimalButton.textContent;
            displayPanel.value = num2;
        }
    }
});

// Add backspace button
const backspaceButton = document.getElementById("backspace");
backspaceButton.addEventListener("click", () => {
    displayPanel.value = displayPanel.value.slice(0, -1);
    if (operator === "") {
        num1 = num1.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
})
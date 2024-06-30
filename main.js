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

const equalButton = document.getElementById("calculate");
equalButton.addEventListener("click", () => {
    if (num1 !== "" && operator !== "" && num2 !== "") {
        displayPanel.value = operate(num1, operator, num2);
        num1 = displayPanel.value;
        num2 = "";
        operator = "";
    }
});



// Check if num1, operator, and num2 have values. 
// If true - run operate function.
// num1 turns into new number after function.
// num2 resets.
// operator resets.

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

// Negative button to convert current number to negative.
// Checks if display panel is empty.
// If true - converts current number string into number value as new currentValue variable.
// Then converts to negative.
// If operator is empty - The number in display becomes num1.
// Then num2 after operator is selected.

// Decimal button to add decimal point to the current number.

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
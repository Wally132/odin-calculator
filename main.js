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
        return "Ya can't";
    } return num1 / num2;
};

//Operate function - To be used with equal button.
function operate(num1, operator, num2) {
    let result;
   num1 = parseFloat(num1);
   num2 = parseFloat(num2);
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
            return "I'm not sure how you got here, sorry bout that"
    }
    return result;
};


//Loop through each number button and add event listeners
const numberButton = document.querySelectorAll(".number");
const displayPanel = document.getElementById("display");

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        if (displayPanel.value.length < 9) {
            displayPanel.value += button.textContent;
            if (operator === "") {
                num1 += button.textContent;
            } else num2 += button.textContent;
        }
    })
})

         // Limit character size to 9 digits
             // if the display value is under 9 - display value.
            // if an operator has not been selected - this equals to num1.
            // otherwise if an operator is selected - this equals num2.
 

const operatorButtons = document.querySelectorAll(".operator"); // Select all operator buttons.
    operatorButtons.forEach(button => {
    button.addEventListener("click", () => { // Loop through buttons to create event listeners.
        if (num1 !== "") { // If num1 is not empty - let the operator equal the text content of selected button.
        operator = button.textContent; // As shown here.
        displayPanel.value = button.textContent; // Update the display panel with the button's text content (operator).
        }
    });
});

const clearButton = document.getElementById("clear"); // Clear button to reset all variables.
    clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    displayPanel.value = "";
});

const equalButton = document.getElementById("calculate"); 
equalButton.addEventListener("click", () => { 
    if (num1 !== "" && operator !== "" && num2 !== "") { // Check if num1, operator, and num2 have values. 
        displayPanel.value = operate(num1, operator, num2); // If true - run operate function.
        num1 = displayPanel.value; // num1 turns into new number after function.
        num2 = ""; // num2 resets.
        operator = ""; // operator resets.
    }
});

const negativeButton = document.getElementById("negative");
negativeButton.addEventListener("click", () => {
    if (displayPanel !== "") { // Checks if display panel is empty.
        let currentValue = parseFloat(displayPanel.value); // If true - converts current number string into number value as new currentValue variable.
        displayPanel.value = -currentValue; // Then converts to negative.
    } if (operator === "") {
        num1 = displayPanel.value; // If operator is empty - The number in display becomes num1.
    } else {
        num2 = displayPanel.value; // Then num2 after operator is selected.
    }
});

const decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", () => {
    if (operator === "") {
        if (!num1.includes(".")) {
            num1 += decimalButton.textContent;
            displayPanel.value = num1
        }
    } else {
        if (!num2.includes(".")) {
            num2 += decimalButton.textContent;
            displayPanel.value = num2;
        }
    }
});
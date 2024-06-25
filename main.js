//write functions for all operators
// let numA and numB = 0
// numB += input for all operators
// numbers clicked should display in display box
let firstNum = 0;
let secNum = 0;
let operator = "";
let initialDisplay = 0;

const numberButton = document.getElementsByClassName('number');
const display = document.getElementById('display');

const num1 = document.getElementById('num1');
num1.addEventListener("click", (e) => {
    display.textContent += 1;
});




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
         return "wtf bro";
     } return num1 / num2;
 }
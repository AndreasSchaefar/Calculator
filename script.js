const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const remainder = (a,b) => a % b;

const setSpacesToNumber = num => {
    let parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
};

const operate = (operator, a, b) => {
    if (operator == "add") {
        return add(a,b);
    } else if (operator == "subtract") {
        return subtract(a,b);
    } else if (operator == "multiply") {
        return multiply(a,b);
    } else if (operator == "divide") {
        return divide(a,b);
    } else if (operator == "remainder") {
        return remainder(a,b);
    };
    return null;
};

const getNumber = e => e.target.textContent;

const getOperation = e => e.target.id;

const display = document.querySelector(".calculation-field");
const buttonsNumbers = document.querySelectorAll(".number");
const buttonOperations = document.querySelectorAll(".operation");
const serviceButtons = document.querySelectorAll(".service");

let currentOperation;
let enteredNumber = "";

Array.from(buttonsNumbers).forEach((button) => {
    button.addEventListener("click", (e) => {
        enteredNumber = getNumber(e);
        display.textContent += enteredNumber;
    });
});

Array.from(buttonOperations).forEach((button) => {
    button.addEventListener("click", (e) => {
        currentOperation = getOperation(e);
        if (currentOperation === "clear") {
            display.textContent = "";
        };
        console.log(currentOperation);
    });
});

// Array.from(serviceButtons).forEach((button) => {
//     button.addEventListener("click")
// })
class Calculator { 
    constructor(previousOperationTextElement, currentOperationTextElement)  {
    this.previousOperationTextElement = previousOperationTextElement;
    this.currentOperationTextElement = currentOperationTextElement;
    };
}; 


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelector("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const previousOperationTextElement = document.querySelector("[data-previous-operation]");
const currentOperationTextElement = document.querySelector("[data-current-operation]");
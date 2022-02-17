class Calculator {
    constructor(previousOperationTextElement, currentOperationTextElement)  {
    this.previous = previousOperationTextElement;
    this.current = currentOperationTextElement;
    }

    clear() {
        this.previous.textContent = "";
        this.current.textContent = 0;
    }

    // if current is not 0 and num is not period append
    // if current is 0 and num is not period set content to num
    // if current is not 0 and doesn't have period append num
    // 
    populate(num) {
        let value = this.current.textContent;
        if (value.includes(".") & num === ".") {
            return;
        } else if (num !== "." & value === "0") {
            this.current.textContent = num
        } else {
            this.current.textContent += num
        }
    }
};

function callClear() {
    calculator.clear();
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const previousOperationTextElement = document.querySelector("[data-previous-operation]");
const currentOperationTextElement = document.querySelector("[data-current-operation]");

const calculator = new Calculator(previousOperationTextElement, currentOperationTextElement);

clearButton.addEventListener("click", callClear);
Array.from(numberButtons).forEach(button => {
    button.addEventListener("click", e => {
        calculator.populate(e.target.textContent);
    })
})
class Calculator { 
    constructor(previousOperationTextElement, currentOperationTextElement)  {
    this.previous = previousOperationTextElement;
    this.current = currentOperationTextElement;
    this.result = 0;
    this.equation = "";
    this.previousOperand = Number(this.previous.textContent);
    this.currentOperand = Number(this.current.textContent);
    }

    clear() {
        this.previous.textContent = "";
        this.current.textContent = "0";
    }

    enterDigit(number) {
        if (number === "0") {
            return;
        } else {
            this.current.textContent += number;
        }

    }

    add() {
        this.result = this.previousOperand + this.currentOperand;
        this.equation = `${this.previousOperand} + ${this.currentOperand} =`;
    }

    subtract() {
        this.result = this.previousOperand - this.currentOperand;
        this.equation = `${this.previousOperand} - ${this.currentOperand} =`;
    }

    multiply() {
        this.result = this.previousOperand * this.currentOperand;
        this.equation = `${this.previousOperand} × ${this.currentOperand} =`;
    }

    divide() {
        this.result = this.previousOperand / this.currentOperand;
        this.equation = `${this.previousOperand} ÷ ${this.currentOperand} =`;
    }

    remainder() {
        this.result = this.previousOperand % this.currentOperand;
        this.equation = `${this.previousOperand} % ${this.currentOperand} =`;
    }

    setSign() {
        this.currentOperand = -this.currentOperand;
        this.current.textContent = this.currentOperand;
    }

    equals() {
        this.currentOperand = this.result;
        this.current.textContent = this.result;
        this.previous.textContent = this.equation;
        this.previousOperand = this.result; 
    }
    
};

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const previousOperationTextElement = document.querySelector("[data-previous-operation]");
const currentOperationTextElement = document.querySelector("[data-current-operation]");

const calculator = new Calculator(previousOperationTextElement, currentOperationTextElement);

const operationsMap = {
    "±": () => {calculator.setSign()},
    "%": () => {calculator.remainder()},
    "÷": () => {calculator.divide()},
    "×": () => {calculator.multiply()},
    "-": () => {calculator.subtract()},
    "+": () => {calculator.add()}
}



Array.from(operationButtons).forEach(button => {
    button.addEventListener("click", operationsMap[button.textContent]);
})

Array.from(numberButtons).forEach(button => {
    button.addEventListener("click", (e) => {
        calculator.enterDigit(e.target.textContent);
    })
})

equalsButton.addEventListener("click", () => {calculator.equals()});
clearButton.addEventListener("click", () => {calculator.clear()});

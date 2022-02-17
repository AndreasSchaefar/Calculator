class Calculator {
    constructor(previousOperationTextElement, currentOperationTextElement)  {
    this.previous = previousOperationTextElement;
    this.current = currentOperationTextElement;
    this.isOperation = false;
    this.operand = {
        prev: "",
        curr: "",
        operation: ""
    };
    }
    
    clear() {
        this.previous.textContent = "";
        this.current.textContent = 0;
        this.operand.prev = "";
        this.operand.curr = "";
        this.operand.operation = "";
    }

    add(a, b){
        return a + b;
    }

    subtract(a,b){
        return a - b;
    }

    multiply(a,b){
        return a * b;
    }

    divide(a,b){
        return a / b;
    }

    remainder(a,b){
        return a % b;
    }

    setSign() {
        this.current.textContent = -Number(this.current.textContent);
    }

    operate(operation) {
        this.operand.curr = this.current.textContent;
        let result;
        switch (operation) {
            case "+":
                result = this.add(Number(this.operand.prev), Number(this.operand.curr));
                break;
            case "-":
                result = this.subtract(Number(this.operand.prev), Number(this.operand.curr));
                break;
            case "×":
                result = this.multiply(Number(this.operand.prev), Number(this.operand.curr));
                break;
            case "÷":
                result = this.divide(Number(this.operand.prev), Number(this.operand.curr));
                break;
            case "%":
                result = this.remainder(Number(this.operand.prev), Number(this.operand.curr));
                break;
            default:
                break;
        }
        //let result = this.add(Number(this.operand.curr), Number(this.operand.prev));
        this.isOperation = true;
        this.current.textContent = result;
        this.operand.prev = result;
        this.operand.operation = "";
    }

    addNewOperand(e) {
        this.isOperation = true;
        this.operand.operation = e.target.textContent;
        this.operand.prev = this.current.textContent;
    }

    populate(num) {
        let value = this.current.textContent;
        if (value.includes(".") & num === ".") {
            return;
        } else if (num !== "." & value === "0" | this.isOperation) {
            this.isOperation = false;
            this.current.textContent = num            
        } else {
            this.current.textContent += num;
        }
        removeSelection();
    }
};

function callClear() {
    calculator.clear();
}

function callSetSign() {
    calculator.setSign();
}

function removeSelection() {
    Array.from(document.querySelectorAll(".selected")).forEach(element => element.classList.remove("selected"));
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const previousOperationTextElement = document.querySelector("[data-previous-operation]");
const currentOperationTextElement = document.querySelector("[data-current-operation]");
const signButton = document.querySelector("[data-sign]");

const calculator = new Calculator(previousOperationTextElement, currentOperationTextElement);

clearButton.addEventListener("click", callClear);
signButton.addEventListener("click", callSetSign);
equalsButton.addEventListener("click", function () {
    if (!calculator.operand.prev | calculator.current.textContent !== "0") {
        if (calculator.operand.operation) {
            calculator.previous.textContent = `${calculator.operand.prev} ${calculator.operand.operation} ${calculator.current.textContent} = `;
            calculator.operate(calculator.operand.operation);
        }
    }
    removeSelection();
})

Array.from(numberButtons).forEach(button => {
    button.addEventListener("click", e => {
        calculator.populate(e.target.textContent);
    })
})


Array.from(operationButtons).forEach(button => {
    button.addEventListener("click", e => {
        e.target.classList.add("selected");
        calculator.addNewOperand(e);
    })
})


class Calculator {
    constructor() {
        this.currentValue = "0"; // Displayed value
        this.previousValue = null; // Previous value
        this.operator = null; // Operator (+, -, *, /)
    }

    // Handle number input
    inputDigit(digit) {
        if (this.currentValue === "0") {
            this.currentValue = digit;
        } else {
            this.currentValue += digit;
        }
    }

    // Handle operator input
    inputOperator(operator) {
        if (this.previousValue === null) {
            this.previousValue = this.currentValue;
        } else if (this.operator) {
            this.calculate();
        }
        this.operator = operator;
        this.currentValue = "0";
    }

    // Perform calculation
    calculate() {
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);

        if (isNaN(prev) || isNaN(current)) return;

        let result;
        switch (this.operator) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentValue = String(result);
        this.previousValue = null;
        this.operator = null;
    }

    // Reset calculator
    reset() {
        this.currentValue = "0";
        this.previousValue = null;
        this.operator = null;
    }

    // Get the displayed value
    getDisplayValue() {
        return this.currentValue;
    }
}

export default Calculator;
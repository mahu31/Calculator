class Calculator {
    constructor() {
        this.currentValue = "0"; // Displayed value
        this.previousValue = null; // Previous value
        this.operator = null; // Operator (+, -, *, /)
        this.waitingForSecondValue = false; // To track the state
    }

    // Handle number input
    inputDigit(digit) {
        if (this.waitingForSecondValue) {
            this.currentValue = digit;
            this.waitingForSecondValue = false;
        } else {
            if (this.currentValue === "0" && digit !== "-") {
                this.currentValue = digit;
            } else {
                this.currentValue += digit;
            }
        }
    }

    // Handle operator input
    inputOperator(operator) {
        if (this.operator && this.waitingForSecondValue) {
            this.operator = operator;
            return;
        }

        if (this.previousValue === null) {
            this.previousValue = this.currentValue;
        } else if (this.operator) {
            this.calculate();
        }

        this.operator = operator;
        this.waitingForSecondValue = true;
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
                if (current === 0) {
                    this.currentValue = "Cannot be divided by 0"; // Set error message
                    this.previousValue = null;
                    this.operator = null;
                    this.waitingForSecondValue = false;
                    return; // Exit calculation
                }
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentValue = String(result);
        this.previousValue = null;
        this.operator = null;
        this.waitingForSecondValue = false;
    }

    // Reset calculator
    reset() {
        this.currentValue = "0";
        this.previousValue = null;
        this.operator = null;
        this.waitingForSecondValue = false;
    }

    // Get the displayed value
    getDisplayValue() {
        return this.currentValue;
    }
}

export default Calculator;

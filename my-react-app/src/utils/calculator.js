class Calculator {
    constructor() {
        this.currentValue = "0"; // Displayed value
        this.previousValue = null; // Previous value
        this.operator = null; // Operator (+, -, *, /)
        this.waitingForSecondValue = false; // To track the state for next number input
    }

    // Handle number input (including the negative sign)
    inputDigit(digit) {
        if (this.waitingForSecondValue) {
            this.currentValue = digit === "-" ? "-" : digit;
            this.waitingForSecondValue = false;
        } else {
            if (this.currentValue === "0" && digit === "-") {
                this.currentValue = digit; // Handle negative number input as the first number
            } else if (this.currentValue === "-" && digit === "-") {
                return; // Prevent multiple "-" at the start
            } else if (this.currentValue === "0") {
                this.currentValue = digit; // Replace "0" with the first input digit
            } else {
                this.currentValue += digit; // Append further digits
            }
        }
    }

    // Handle operator input
    inputOperator(operator) {
        if (this.waitingForSecondValue && this.operator) {
            this.operator = operator; // Change operator if the second number hasn't been input yet
            return;
        }

        if (this.previousValue === null) {
            this.previousValue = this.currentValue; // Store the first value
        } else if (this.operator) {
            this.calculate(); // Perform calculation if there is already a pending operation
        }

        this.operator = operator; // Set the new operator
        this.waitingForSecondValue = true; // Wait for the next value to be input
    }

    // Perform calculation
    calculate() {
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);

        if (isNaN(prev) || isNaN(current)) return; // Exit if any value is not a number

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

        this.currentValue = String(result); // Display the result
        this.previousValue = null; // Clear previous value for the next operation
        this.operator = null; // Clear the operator
        this.waitingForSecondValue = false; // Allow input for the next calculation
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

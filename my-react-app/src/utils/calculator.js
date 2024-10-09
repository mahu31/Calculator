class Calculator {
    constructor() {
        this.currentValue = "0"; // Displayed value
        this.previousValue = null; // Previous value
        this.operator = null; // Operator (+, -, *, /)
        this.waitingForSecondValue = false; // Track state for next number input
    }

    // Handle number input (including decimal point)
    inputDigit(digit) {
        if (digit === "." && this.currentValue.includes(".")) {
            return; // Prevent multiple decimal points
        }

        if (this.waitingForSecondValue) {
            this.currentValue = digit === "-" ? "-" : digit;
            this.waitingForSecondValue = false;
        } else {
            if (this.currentValue === "0" && digit === "-") {
                this.currentValue = digit; // Handle negative number input as the first number
            } else if (this.currentValue === "0" && digit !== ".") {
                this.currentValue = digit; // Replace "0" with the first input digit unless it's "."
            } else {
                this.currentValue += digit; // Append further digits or the first "."
            }
        }
    }

    // Handle operator input
    inputOperator(operator) {
        // Prevent multiple consecutive operators
        if (this.waitingForSecondValue && this.operator) {
            // Perform the calculation if a second operator is pressed after both values are input
            this.calculate();
            this.operator = operator; // Update with the new operator
            this.previousValue = this.currentValue; // Set the result as the new previous value
            this.waitingForSecondValue = true; // Wait for the next number
        } else {
            if (this.previousValue === null) {
                // If no previous value, set the current as previous
                this.previousValue = this.currentValue;
            } else if (this.operator) {
                // If an operator is already present, calculate first
                this.calculate();
            }

            this.operator = operator; // Set the new operator
            this.waitingForSecondValue = true; // Now wait for the next input
        }
    }


    // Perform basic calculation
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

const handleButtonClick = (item, calculator, setDisplay, handleResetClick, handleEqualsClick, handleDigitClick, handleOperatorClick) => {
    if (item === "C") {
        handleResetClick();
    } else if (item === "=") {
        handleEqualsClick();
    } else if (!isNaN(item) || item === ".") { // If it's a digit or decimal point
        handleDigitClick(item);
    } else if (item === "sin" || item === "cos") {
        handleOperatorClick(item); // Handle trig functions
    } else {
        handleOperatorClick(item);
    }
};

export default handleButtonClick;

const handleButtonClick = (item, calculator, setDisplay, handleResetClick, handleEqualsClick, handleDigitClick, handleOperatorClick) => {
    switch (item) {
        case "C":
            handleResetClick();
            break;
        case "=":
            handleEqualsClick();
            break;
        case item.match(/[0-9]/) ? item : null:
            handleDigitClick(item);
            break;
        default:
            handleOperatorClick(item);
            break;
    }
};

export default handleButtonClick;

const handleButtonClick = (item, calculator, setDisplay, handleResetClick, handleEqualsClick, handleDigitClick, handleOperatorClick) => {
    switch (item) {
        case "C":
            handleResetClick();
            break;
        case "=":
            handleEqualsClick();
            break;
        //     TODO check it
        case item.match(/[0-9]/) ? item : null: // This will evaluate to the item if it is a digit
            handleDigitClick(item);
            break;
        default:
            handleOperatorClick(item);
            break;
    }
};

export default handleButtonClick;

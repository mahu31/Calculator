import { useState } from "react";
import Calculator from '../../utils/calculator.js';
import { Box, Typography } from '@mui/material';
import CalculatorButton from "../calculatorButton/index.jsx";
import buttonGroups from "../../utils/buttonGroups.js";
import handleButtonClick from "../../utils/handleButtonClick.js";

const CalculatorApp = () => {
    const [calculator] = useState(new Calculator());
    const [display, setDisplay] = useState("");
    const [previousDisplay, setPreviousDisplay] = useState("");
    const [operator, setOperator] = useState("");

    const handleDigitClick = (digit) => {
        calculator.inputDigit(digit);
        setDisplay(calculator.getDisplayValue());
    };

    const handleOperatorClick = (operator) => {
        setPreviousDisplay(calculator.getDisplayValue());
        setOperator(operator);
        calculator.inputOperator(operator);
        setDisplay(""); // Clear display for the next input
    };

    const handleEqualsClick = () => {
        calculator.calculate();
        setDisplay(calculator.getDisplayValue());
        setPreviousDisplay("");
        setOperator("");
    };

    const handleResetClick = () => {
        calculator.reset();
        setDisplay("");
        setPreviousDisplay("");
        setOperator("");
    };

    return (
        <Box className="calculator" sx={{ maxWidth: 300, margin: 'auto', textAlign: 'center' }}>
            <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
                Calculator
            </Typography>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    marginBottom: 2,
                    padding: 2,
                    border: '1px solid #ccc',
                    borderRadius: 2
                }}
            >
                {previousDisplay} {operator} {display}
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
                {buttonGroups.map((group) => (
                    group.map((item) => (
                        <CalculatorButton
                            key={item}
                            item={item}
                            onClick={() => handleButtonClick(item, calculator, setDisplay, handleResetClick, handleEqualsClick, handleDigitClick, handleOperatorClick)}
                        />
                    ))
                ))}
            </Box>
        </Box>
    );
};

export default CalculatorApp;
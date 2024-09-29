import { useState } from "react";
import Calculator from '../../utils/calculator.js'
import { Box, Typography } from '@mui/material';
import CalculatorButton from "../calculatorButton/index.jsx";
import buttonGroups from "../../utils/buttonGroups.js";
import handleButtonClick from "../../utils/handleButtonClick.js";

const CalculatorApp = () => {
  const [calculator] = useState(new Calculator());
  const [display, setDisplay] = useState("");
  const [previousDisplay, setPreviousDisplay] = useState(""); // Initialize previousDisplay as an empty string
  const [operator, setOperator] = useState(""); // State for the operator

  const handleDigitClick = (digit) => {
    calculator.inputDigit(digit);
    setDisplay(calculator.getDisplayValue());
  };

  const handleOperatorClick = (operator) => {
    setPreviousDisplay(calculator.getDisplayValue()); // Save current value as previous
    setOperator(operator); // Set the current operator
    calculator.inputOperator(operator);
    setDisplay(""); // Set display to empty string for the next input
  };

  const handleEqualsClick = () => {
    calculator.calculate();
    setDisplay(calculator.getDisplayValue());
    setPreviousDisplay(""); // Clear previous value after calculation
    setOperator(""); // Clear operator after calculation
  };

  const handleResetClick = () => {
    calculator.reset();
    setDisplay(""); // Reset display to empty string
    setPreviousDisplay(""); // Clear previous value on reset
    setOperator(""); // Clear operator on reset
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

import { Button } from '@mui/material';

const CalculatorButton = ({ item, onClick }) => {
    return (
        <Button variant="outlined" onClick={onClick}>
            {item}
        </Button>
    );
};

export default CalculatorButton;

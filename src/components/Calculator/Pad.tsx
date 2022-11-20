import { Box, Button } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { Digit, Operator } from '../../Types/Types';
import "./Style.css"

interface PadProps {
    onDigitButtonClick: (digit: Digit) => void
    onPointButtonClick: () => void
    onOperatorButtonClick: (operator: Operator) => void
    onChangeSignButtonClick: () => void
    onEqualButtonClick: () => void
    onAllClearButtonClick: () => void
    onClearEntryButtonClick: () => void
    onMemoryRecallButtonClick: () => void
    onMemoryClearButtonClick: () => void
    onMemoryPlusButtonClick: () => void
    onMemoryMinusButtonClick: () => void
    onSqrt: () =>void
}


export const Pad: FunctionComponent<PadProps> = ({
    onDigitButtonClick,
    onPointButtonClick,
    onOperatorButtonClick,
    onChangeSignButtonClick,
    onEqualButtonClick,
    onAllClearButtonClick,
    onClearEntryButtonClick,
    onSqrt
}) => {

    return (
        <Box className='buttonContainer'>
            <Button className='buttonCalc' onClick={() => onOperatorButtonClick('^')}>
                x^y
            </Button>
            <Button className='buttonCalc' onClick={onSqrt}>
                Sqrt
            </Button>
            <Button className='buttonCalc' onClick={onAllClearButtonClick}>
                AC
            </Button>
            <Button className='buttonCalc' onClick={onClearEntryButtonClick}>
                C
            </Button>
            <Button className='buttonCalc' onClick={onChangeSignButtonClick}>
                -/+
            </Button>
           

            <Button className='buttonCalc' onClick={() => onDigitButtonClick(7)}>
                7
            </Button>
            <Button className='buttonCalc' onClick={() => onDigitButtonClick(8)}>
                8
            </Button>

            <Button className='buttonCalc' onClick={() => onDigitButtonClick(9)}>
                9
            </Button>
            <Button className='buttonCalc' onClick={() => onOperatorButtonClick('×')}>
                ×
            </Button>

            <Button className='buttonCalc' onClick={() => onDigitButtonClick(4)}>
                4
            </Button>
            <Button className='buttonCalc' onClick={() => onDigitButtonClick(5)}>
                5
            </Button>
            
            <Button className='buttonCalc' onClick={() => onDigitButtonClick(6)}>
                6
            </Button>
            <Button className='buttonCalc' onClick={() => onOperatorButtonClick('÷')}>
                ÷
            </Button>
            
            <Button className='buttonCalc' onClick={() => onDigitButtonClick(1)}>
                1
            </Button>
            <Button className='buttonCalc' onClick={() => onDigitButtonClick(2)}>
                2
            </Button>
            <Button className='buttonCalc' onClick={() => onDigitButtonClick(3)}>
                3
            </Button>
            <Button className='buttonCalc' onClick={() => onOperatorButtonClick('+')}>
                +
            </Button>
            <Button className='buttonCalc' onClick={() => onOperatorButtonClick('-')}>
                -
            </Button>

            <Button className='buttonCalc' onClick={() => onDigitButtonClick(0)}>
                0
            </Button>
            <Button className='buttonCalc' onClick={onPointButtonClick}>
                .
            </Button>




            <Button className='buttonCalc' onClick={onEqualButtonClick}>
                =
            </Button>
        </Box>
    )
}

export default Pad
import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import React, { useState, FC } from 'react';
import { FunProps, Quest, ResultProps, StepProps } from '../../Types/Types';
import { AllQuest } from './AllQuest';

const Result = ({ correctVar }: ResultProps) => (
    <div>
        <Typography align='center' variant='h4'>Результат</Typography>
        <Typography variant='body1'>Вы правильно ответили на {correctVar} из {AllQuest.length}</Typography>
        <Typography variant='body1'>Ваша оценка {Math.round(Math.max((correctVar / AllQuest.length) * 5, 2))}</Typography>
    </div>
)
const ViewTest: FC<Quest & FunProps & StepProps> = ({ img, title, variants, onClickVar, step }) => {
    return (
        <div>
            <Typography align='center' variant='h4'>{title}</Typography>
            <Box alignItems="center" flexDirection="column" display="flex">
                <img src={img} alt={title} style={{height:"400px", width: "auto"}}/>
            </Box>       
            <List>
                {variants.map((text, index) => (  
                    <ListItem divider onClick={() => onClickVar(index)} key={text}>
                        <ListItemButton>
                            <ListItemText primary={text}></ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div >
    )

}

const Test = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const questions = AllQuest[step];
    const onClickVar = (index: number) => {
        setStep(step + 1);
        if (index === questions.correctVariant) {
            setCorrect(correct + 1);
        }

    };


    return (
        <div>
            {step !== AllQuest.length ? ViewTest({ step, ...questions, onClickVar }) : Result({ correctVar: correct })}

        </div>
    )
}

export default Test;


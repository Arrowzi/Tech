import { Box, List, ListItem, ListItemButton, ListItemText, Typography, Dialog, Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import React, { useState, FC } from 'react';
import { FunProps, Quest, ResultProps, StepProps } from '../../Types/Types';
import { AllQuest } from './AllQuest';

const Result = ({ correctVar }: ResultProps) => {
    const[open, setOpen]=useState(false);
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClickClose = () => {
        setOpen(false)
    }
    return (
    <div>
        <Typography align='center' variant='h4'>Тест завершён</Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
            <img src='https://papik.pro/uploads/posts/2022-01/1641264743_19-papik-pro-p-galochka-vektornii-risunok-22.png' style={{width:"300px", height:"300px"}}></img>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
            <Button onClick={handleClickOpen}>Посмотреть резултаты</Button>
        </Box>
        <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Результаты"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Вы правильно ответили на {correctVar} из {AllQuest.length}<br/>
                Ваша оценка {Math.round(Math.max((correctVar / AllQuest.length) * 5, 2))}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Ок</Button>
        </DialogActions>
      </Dialog>

        {/* <Typography variant='body1'>Вы правильно ответили на {correctVar} из {AllQuest.length}</Typography>
        <Typography variant='body1'>Ваша оценка {Math.round(Math.max((correctVar / AllQuest.length) * 5, 2))}</Typography> */}
    </div>)
}
const ViewTest: FC<Quest & FunProps & StepProps> = ({ img, title, variants, onClickVar, step }) => {
    return (
        <div>
            <Typography align="center" variant="h3" gutterBottom>
                   Тесты
            </Typography>
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
            {step !== AllQuest.length ? <ViewTest step={step} {...questions} onClickVar={onClickVar}/>: <Result correctVar={correct}/>}

        </div>
    )
}

export default Test;


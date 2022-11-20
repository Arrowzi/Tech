import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import React, { useState } from "react";

const Monuments = () => {
    const [city, setCity] = useState('');
    const [monument, setMonument] = useState('');
    const [sum, setSum] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleChangeCity = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    }

    const handleChangeMonument = (event: SelectChangeEvent) => {
        setMonument(event.target.value);
        if (city === event.target.value) {
            setSum(sum + 1);
        }
    }

    const handleResult = () => {
        setShowResult(true);
    }

    const handleRefresh = () => {
        setCity('');
        setMonument('');
        setSum(0);
        setShowResult(false);
    }


    return (
        <>
            <Box display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="city-label">Города</InputLabel>
                    <Select
                        labelId="city-label"
                        id="city"
                        value={city}
                        label="Города"
                        onChange={handleChangeCity}
                    >
                        <MenuItem value="rim">Рим</MenuItem>
                        <MenuItem value="ufa">Уфа</MenuItem>
                        <MenuItem value="giza">Гиза</MenuItem>
                        <MenuItem value="ber">Берлин</MenuItem>
                        <MenuItem value="moscow">Москва</MenuItem>
                        <MenuItem value="par">Париж</MenuItem>
                        <MenuItem value="lon">Лондон</MenuItem>
                        <MenuItem value="sid">Сидней</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="monument-label">Памятники</InputLabel>
                    <Select
                        labelId="monument-label"
                        id="monument"
                        value={monument}
                        label="Монументы"
                        onChange={handleChangeMonument}
                    >
                        <MenuItem value="ufa">Монумент дружбы</MenuItem>
                        <MenuItem value="rim">Колизей</MenuItem>
                        <MenuItem value="sid">Сиднейский оперный театр</MenuItem>
                        <MenuItem value="lon">Биг-Бен</MenuItem>
                        <MenuItem value="giza">Пирамида Хеопса</MenuItem>
                        <MenuItem value="moscow">Красная площадь</MenuItem>
                        <MenuItem value="ber">Бранденбургские ворота</MenuItem>
                        <MenuItem value="par">Лувр</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {showResult ? <Typography variant="h5" align="center" gutterBottom>Количество правильных ответов: {sum}</Typography> : null}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Button onClick={handleResult} style={{ margin: "5px" }} variant="contained" >Результат</Button>
                <Button onClick={handleRefresh} style={{ margin: "5px" }} variant="contained" >Обновить</Button>
            </Box>

        </>
    );
}

export default Monuments;
import { Avatar, Box, Container, Divider, Grid, Link, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
const About = () => {
    return (
        <>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                        {/* Item 1*/}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                                <Typography align="center" variant="h4" gutterBottom>
                                    Основная информация
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Номер телефона: +7(965)-920-40-58
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Электронная почта: Arrowzi1@yandex.ru
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Ссылка на ВКонтакте: <Link href="https://vk.com/arrowzi" variant="body2">Перейти</Link>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Ссылка на Instagram: <Link href="https://www.instagram.com/arrowzi/" variant="body2">Перейти</Link>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Пол: Мужской
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Дата рождения: 22 мая 2000 года
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Образование: Высшее (бакалавр)
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Информация:<br/>
                                    В данный момент учусь в Уфимском университете науки и технологий, в магистратуре, на направлении прикладная математика и ифнорматика. Бакалавриат закончил в Башкирском Государственном Университете.
                                    в 2018 году закончил Гиманазию №47. Пишу музыку, владею навыками музыкального сведения, видеомонтажа.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
                            <Typography align="center" variant="h4" gutterBottom>
                                    Картинка
                            </Typography>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <Avatar variant="rounded" sx={{ bgcolor: "#A833FF", width: 200, height: 200 }} src="https://cdn.fishki.net/upload/post/201405/28/1273062/mottonetua-41810.jpg" />
                                </Box>
                                <Typography align="center" variant="h5" gutterBottom>
                                    Борисов Никита
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default About;
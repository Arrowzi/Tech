import { Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'

const Images = ["https://phonoteka.org/uploads/posts/2021-05/1622166656_4-phonoteka_org-p-oboi-art-minimalizm-krasivo-4.jpg",
    "https://kartinkin.net/uploads/posts/2021-07/1625791428_20-kartinkin-com-p-minimalistichnie-oboi-na-kompyuter-krasivi-22.jpg",
    "https://i.pinimg.com/originals/19/d2/fb/19d2fbba84a58e6e7be43492ffc17b6e.jpg",
    "https://get.wallhere.com/photo/minimalism-Desktopography-1712271.jpg",
    "https://phonoteka.org/uploads/posts/2021-06/1624471367_17-phonoteka_org-p-oboi-minimalizm-priroda-krasivo-17.png"];
const SlideShow = () => {
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
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 750 }}>
                                <Typography align="center" variant="h3" gutterBottom>
                                    Слайд-шоу
                                </Typography>
                                <Carousel autoPlay={true} indicators>
                                    {
                                        Images.map((item) => (<img style={{ objectFit: "cover", height: 600, width: "100%" }} src={item} />))
                                    }

                                </Carousel>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default SlideShow;
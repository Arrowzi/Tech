import { Box, createTheme, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material";
import Router from "../Router";

const theme=createTheme({
    palette:{
        mode:"dark",
    },
});


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Router />
            </Box>
        </ThemeProvider>
    )
}

export default App;
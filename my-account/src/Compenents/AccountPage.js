import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#009688',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#fafafa',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function AccountPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {/* <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > */}
          <Typography component="h2" variant="h4" color={'primary'}>
            Patient
          </Typography>
          <Typography component="h1" variant="h3" color={'secondary'}>
            My Account
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                href="#"
                variant='outlined'
                color='secondary'
                fullWidth>
                    Health
                </Button>                 
              </Grid>
              <Grid item xs={12}>
                <Button
                href="#"
                variant='outlined'
                color='secondary'
                fullWidth>
                    Personal Information
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                href="#"
                variant='outlined'
                color='secondary'
                fullWidth>
                    Settings
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                href="#"
                variant='outlined'
                color='secondary'
                fullWidth>
                    Privacy
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                href="#"
                variant='outlined'
                color='secondary'
                fullWidth>
                    Medical History
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                href="#"
                variant='outlined'
                color='secondary'
                fullWidth>
                    Help
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                href="#"
                variant='outlined'
                color='secondary'
                fullWidth>
                    About
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                href="#"
                variant='contained'
                color='error'
                fullWidth>
                    Log Out
                </Button>
              </Grid>
            </Grid>
            <Button
              href="#"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Back to Home
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                </Grid>
            </Grid>
          </Box>
        {/* </Box>         */}
      </Container>
    </ThemeProvider>
  );
}
// import React, {useRef} from 'react';
// import {Form, Button, Card} from 'react-bootstrap';
// import { useAuth } from '../../context/AuthContext';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function HeadLogin() {
  // const emailRef = useRef();
  // const passwordRef = useRef();
  
  // const { signup } = useAuth();
  // const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  // async function handleSubmit(e){
  //   e.prevenDefault();

  //   if(passwordRef.current.value !== 
  //     passwordConfirmRef.current.value){
  //       return setError('Passwords do not match')
  //     }

  //     try{
  //       setError('')
  //       setLoading(true)
  //       await signup(emailRef.current.value, passwordRef.current.value)
  //     }catch{
  //       setError("Failed to create an account")
  //     }
  //     setLoading(false);
    
  // }

  const defaultTheme = createTheme();

  // // const handleSubmit = (event) => {
  // //   event.preventDefault();
  // //   const data = new FormData(event.currentTarget);
  // //   console.log({
  // //     email: data.get('email'),
  // //     password: data.get('password'),
  //   });
  return (
    <>
      {/* <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Head Login</h2>
          <Form>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' ref={passwordRef} required />
            </Form.Group>
            <Button className='w-100' type='submit'>Login</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Don't have an account? Sign up
      </div> */}

<ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Head Login
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  )
}

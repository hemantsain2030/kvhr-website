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
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

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
  
  const navigate = useNavigate();
  const [form, setForm]= useState({})
  const [error,setError]=useState();

  const handleForm= (e) =>{
    console.log(e.target.value, e.target.name)
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData(e.currentTarget);
    // console.log(data)
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    await axios.post('http://127.0.0.1:3000/headLogin',{form})
    .then(async function (response) {
      // handle success
      var _message = await response.data.Success;
      var text="";
      text=JSON.stringify(_message)
      if  (text == "Login successful"){
        navigate('/headPage')
      }
      setError(text)
      console.log(response.data.Success);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  };

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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleForm}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleForm}
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
            {error?<p>{error}</p>:null}  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={handleSubmit}
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
        <button visibility="hidden" link ></button>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </>
  )
}

import React, {useRef} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
// import { useAuth } from '../../context/AuthContext';

export default function CandidateLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  
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
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Candidate Login</h2>
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
      </div>
    </>
  )
}

import React from 'react';
// import { Container } from 'react-bootstrap';
// import { AuthProvider } from '../context/AuthContext';
import { Container } from 'react-bootstrap';




const Homepage = ()=>{

    return (
        <>
        
        <Container className='d-flex align-items-center 
          justifiy-content-center'
          style={{minHeight:"100vh" }}>
            <div className='w-100' style={{maxWidth: "400px"}}>
              
              <h1>This is Homepage!</h1>
            </div>  
          </Container>  
          
          
        
         
        </>
    );
};


export default Homepage;




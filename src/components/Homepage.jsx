import React from 'react';
import { Container } from 'react-bootstrap';
// import { AuthProvider } from '../context/AuthContext';




const Homepage = ()=>{

    return (
        <>
        
          <Container className='d-flex align-items-center 
          justifiy-content-center'
          style={{minHeight:"100vh" }}>
            <div className='w-100' style={{maxWidth: "400px"}}>
              {/* <HeadLogin /> */}
              <h1>This is Homepage!</h1>
            </div>  
          </Container>
        {/* <Wrapper>
          <div className="container grid grid-two-container">
            <div className='section-home-data'>
              <p className='home'>This is Homepage</p>
              <h1 className='home-heading'>This is Homepage</h1>
              <p className='home-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
          </div>
        </Wrapper> */}
        
         
        </>
    );
};

export default Homepage;




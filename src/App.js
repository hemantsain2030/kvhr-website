import React from 'react';
import 'D:/KVHR/organizationwebsite/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Information from './components/Information';
import Homepage from './components/Homepage';
import HeadReg from './components/RegistrationPages/HeadReg';
import ManageReg from './components/RegistrationPages/ManagementReg';
import RecruiteReg from './components/RegistrationPages/RecruiterReg';
import HeadLogin from './components/LoginForms/HeadLogin';
import ManagementLogin from './components/LoginForms/ManagementLogin';
import RecruiterLogin from './components/LoginForms/RecruiterLogin';
import CandidateReg from './components/RegistrationPages/CandidateReg';
import CandidateLogin from './components/LoginForms/CandidateLogin';
import ClientReg from './components/RegistrationPages/ClientReg';
import ClientLogin from './components/LoginForms/ClientLogin';



const App = ()=>{
  return (
      <BrowserRouter>
       <div className='App'>
         <>
         <Navbar bg="light" expand="lg">
         <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/about'>About us</Nav.Link>
              <NavDropdown title="Register" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to='/head'>Head</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/management'>
                  Management
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/recruiteReg'>
                  Recruiter
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/candidateReg'>
                  Candidate
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/clientReg'>
                  Client
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Login" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to='/headLogin' >Head Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/managementLogin'>
                  Management Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/recruiterLogin'>
                  Recruiter Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/candidateLogin'>
                  Candidate Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/clientLogin'>
                  Client Login
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
         </>
         <div>
          <Routes>
            <Route path='/about' element={<Information />}/>
            <Route path='/' element={<Homepage />}/>
            <Route path='/head' element={<HeadReg />}/>
            <Route path='/management' element={<ManageReg />}/>
            <Route path='/recruiteReg' element={<RecruiteReg />}/>
            <Route path='/candidateReg' element={<CandidateReg />}/>
            <Route path='/clientReg' element={<ClientReg />}/>
            <Route path='/headLogin' element={<HeadLogin />}/>
            <Route path='/managementLogin' element={<ManagementLogin />}/>
            <Route path='/recruiterLogin' element={<RecruiterLogin />}/>
            <Route path='/candidateLogin' element={<CandidateLogin />}/>
            <Route path='/clientLogin' element={<ClientLogin />}/>
          </Routes>
         </div>
       </div>
      </BrowserRouter> 
     
  );
};

export default App;
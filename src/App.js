import React from 'react';
import 'D:/KVHR/organizationwebsite/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
// import ResponsiveDrawer from './components/Pages/Dashboard';
// import Manager from './components/Pages/Manager';






const App = ()=>{

  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgb(24,24,29)",
      white:"#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgba(98, 84, 243, 0.5)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Header/>
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
            {/* <Route path='/manager' element={<Manager />}/> */}
          </Routes>
      </BrowserRouter>
    </ThemeProvider>  
     
  );
};

export default App;
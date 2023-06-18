import React from 'react';
// import { Container } from 'react-bootstrap';
// import { AuthProvider } from '../context/AuthContext';
// import { Container } from 'react-bootstrap';
// import Sidebar from './Sidebar';
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/styles/StyledUl';
// import {FaGem, FaHeart} from '@mui/icons-material';
// import SideBarItems from './Sidebar/SideBarItems';
// import Search from './SearchDiv/Search';
// import Footer from './Footer';
// import Sidebar from './Sidebar';
import ResponsiveDrawer from './Pages/Dashboard';
import './Styles/App.css';
// import { BrowserRouter } from 'react-router-dom';
import Manager from './Pages/Manager';


const Homepage = ()=>{

    return (
        <>
        
        {/* <Container className='d-flex align-items-center 
          justifiy-content-center'
          style={{minHeight:"100vh" }}> */}
            {/* <div className='w-100' style={{maxWidth: "400px"}}>
              
              <h1>This is Homepage!</h1>
            </div>   */}
          {/* </Container>   */}
          <ResponsiveDrawer />
          {/* <h1 className='home'>Homepage</h1> */}
          <Manager />
          
        
        {/* <Search />
        <Footer/> */}
        



          
          
        
         
        </>
    );
};


export default Homepage;




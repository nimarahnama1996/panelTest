import React from 'react';
import { Route, Routes } from 'react-router-dom';


import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import SideMenu from './components/SideMenu/SideMenu';


function App() {
  return (
    <div className='container'>

      <div className='navbar'>
        <Navbar/>
      </div>

      <div>
     <BreadCrumb/>
     </div>

     <div className='side'>
     <SideMenu/>
     </div>

      <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='notifications' element={<Notifications/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

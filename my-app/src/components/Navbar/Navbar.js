import React from 'react'
import {PoweroffOutlined,BellOutlined,SettingOutlined,MessageOutlined,SearchOutlined,MenuOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Input } from 'antd';

import logo from '../../img/logomenu.PNG'
import user from '../../img/profile.png'
import './Navbar.css'


const Navbar = () => {
  return (
    <header>

    <div>
  
   <Space className='nav-icons'>
   <img src={logo} alt='logo' className='nav-logo'/>
   <MenuOutlined className='nav-menu'/>
   <Avatar src={user} alt='user' className='nav-user' />
   <Input placeholder="Search Dashboard" className='nav-input'/>
   <SearchOutlined className='nav-search-icon' style={{marginLeft:'25px', cursor:'pointer'}}/>
   <MessageOutlined className='nav-message-icon' style={{marginLeft:'25px', cursor:'pointer'}}/> 
    <SettingOutlined className='nav-setting-icon' style={{marginLeft:'25px', cursor:'pointer'}}/>
    <BellOutlined className='nav-bell-icon' style={{marginLeft:'25px', cursor:'pointer'}}/>
    <PoweroffOutlined className='nav-power-icon' style={{marginLeft:'25px', cursor:'pointer'}}/>
    
   </Space>

   
   

    </div>

    

    </header>
  )
}

export default Navbar
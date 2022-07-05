import React from 'react'
import { Menu } from 'antd'
import {HomeOutlined,BellOutlined,EyeOutlined,AppstoreOutlined,CloudUploadOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'


import './SideMenu.css'


const { SubMenu } = Menu;



const SideMenu = () => {

    
  return (
    <div>
    
    <div className='side-menu'>

      <Menu
        defaultOpenKeys={['1']}
        defaultSelectedKeys={['1']}
        style={{ 
            width: 300,
            backgroundColor:'#131313',
            color:'#ffffff',
            marginTop:'-10px',
            marginLeft:'-10px'
             }}
        mode="inline"
        theme='dark'
        
      >
        
          <Menu.Item key="1" icon={<HomeOutlined className='home'/>} >
            <Link to='/'>Overview</Link>
          </Menu.Item>

          <div className='text'>
            <h3>Explore</h3>
          </div>

          <Menu.Item key="2" icon={<BellOutlined/>} style={{marginTop:'60px'}}>
            <Link to='/notifications'>
                Notifications
            </Link>
          </Menu.Item>


          <SubMenu key="3" title="Contents" icon={<EyeOutlined/>} style={{marginTop:'20px'}}>
            <Menu.Item key="4">Filimo (Selection)</Menu.Item>
            <Menu.Item key="5">Filimo (Statistic)</Menu.Item>
            <Menu.Item key="6">TSCOBOX</Menu.Item>
        </SubMenu>

        <Menu.Item key="7" icon={<AppstoreOutlined/>} style={{marginTop:'20px'}}>
            <Link to='/launchers'>
            Launchers
            </Link>
          </Menu.Item>

          <Menu.Item key="8" icon={<CloudUploadOutlined/>} style={{marginTop:'20px'}}>
            <Link to='/ota'>
            OTA Management
            </Link>
          </Menu.Item>

        
        <SubMenu key="9" title="Monitoring" icon={<EyeOutlined/>} style={{marginTop:'20px'}}>
          <Menu.Item key="10">Users</Menu.Item>
          <Menu.Item key="11">Servers</Menu.Item>
          <Menu.Item key="12">Products</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
    </div>

  )
}


export default SideMenu
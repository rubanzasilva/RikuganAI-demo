// import React, {useState} from 'react'
// import { FaBars } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import { SidebarData } from '../SideBar/sideBarData.js'
// import './navbar.css'
// import { IconContext } from 'react-icons'
// import * as AiIcons from 'react-icons/ai';

import React from 'react';
import 'antd/dist/antd.css';
import { FaBars } from 'react-icons/fa'
import { SidebarData } from '../SideBar/sideBarData'

import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai';

// import './index.css';
import { Layout, Menu, Breadcrumb ,Upload, Button} from 'antd';
import {
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DatabaseOutlined,
  UploadOutlined ,
} from '@ant-design/icons';
import { Deploy } from 'grommet-icons';
// import {NavLink, ItemContainer, ItemHeading, ItemName, UploadData, ItemTable, MenuContainer} from './menuElements'
import { MenuContainer } from '../Menu/menuElements'
import {
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import Navbar from '../Navbar'





const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};



function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
}





class NavBar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };


  render() { 
    const { collapsed } = this.state;
    return (
      <MenuContainer>
      <Navbar/>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}  >

        <nav >
      <ul className='nav-menu-items' >
        {SidebarData.map((item, index) => {
          return (
            
            


            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              
            <li key={index} className={item.cName}>
              {/* <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link> */}

             
              <Menu.Item key="1" icon={item.icon}>
            <CustomLink to={item.path}><span>{item.title}</span></CustomLink>
            </Menu.Item>

            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Data Management">
            <Menu.Item key="3">
                <CustomLink to="/Visualization"> Datasets </CustomLink>
              </Menu.Item>
            </SubMenu> */}
            

           

              
            </li>
            

              </Menu>
          )
        })}
      </ul>
    </nav>

          <div className="logo" />
         
          <hr />

<Outlet />
        </Sider>

        {/* <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
           
          </Content>
          <Footer style={{ textAlign: 'center' }}>RIKUGAN AI ©2022 Powered by Rikugan AI Technology Corp.</Footer>
        </Layout> */}
      </Layout>
      </MenuContainer>
    );
  }
}

export default NavBar



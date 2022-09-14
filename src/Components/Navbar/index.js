import React from 'react'
import { Nav,  NavMenu, NavItem, NavLink, Container, Navlogo } from './NavbarElements'
import {  Avatar, Upload, Button } from 'antd';
import {
  UploadOutlined ,MenuOutlined,
} from '@ant-design/icons';
import { IoMdNotificationsOutline } from 'react-icons/io';


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
 
const Navbar = () => {
  return (
    <Container>
    <Navlogo>
      <p>RIKUGAN AI</p>
    </Navlogo>

   
    <Nav>
    <NavMenu>
      <NavItem>
        <NavLink to="/"><MenuOutlined /></NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">
        <IoMdNotificationsOutline />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">
        <Upload {...props}>
        <Button icon={<UploadOutlined />}> Upload Dataset </Button>
        </Upload>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/"><Avatar src="https://joeschmoe.io/api/v1/random" /></NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/"></NavLink>
      </NavItem>
      
    </NavMenu>
   
    </Nav>
    </Container>

  )
}

export default Navbar


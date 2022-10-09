import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,Img} from './NavBarElements';
// import logo from '../../Images/suwikLogo.jpeg';
import 'antd/dist/antd.css';

import { Typography } from 'antd';

const { Title } = Typography;

const NavHome = ({toggle,img,alt}) => {
    return (
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to='/'>
                  X2Y AI
                      {/* <Img src={logo} alt={alt}/> */}
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/ProductCatalog ">AI playground</NavLinks>
                          {/* <NavLinks to="/ContactUs">About Zicofe</NavLinks> */}
                      </NavItem>
                      

                      <NavItem>

                          {/* <NavLinks to="/cafe">Zicofe Cafe</NavLinks> */}
                          <NavLinks to="/ContactUs">Try for free</NavLinks>
                      </NavItem>


                      <NavItem>
                          <NavLinks to="/ProductCatalog">Contact us</NavLinks>
                          {/* <NavLinks to="/shop">Shop</NavLinks> */}
                      </NavItem>


                      

                  </NavMenu>

                  <NavBtn>
                      <NavBtnLink to="/homepage"> Login </NavBtnLink>
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default NavHome
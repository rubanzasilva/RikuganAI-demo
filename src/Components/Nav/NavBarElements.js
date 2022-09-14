import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
//import {NavLink as LinkNav} from 'react-router-dom';

export const Nav = styled.nav`
 height: 120px;
 margin-top:10px;
 display:flex;
 justify-content:center;
 align-items:center;
 position:sticky;
 top:0;
 border:border-box;
 background-color: #ffffff;
 cursor:pointer;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;

 @media screen and (max-width:960px) {
     transition: 0.8s all ease;
     height:80px;
 }
`

export const NavBarContainer = styled.div`
 display:flex;
 justify-content:space-between;
 height:80px;
 width:80%;
 padding: 0;
 max-width:2400px;

 @media screen and (max-width:960px) {
     width:80%;
        
    }
`


export const NavLogo = styled(LinkR)`
 color:green;
 justify-self:flex-start;
 cursor:pointer;
 font-size:1.5rem;
 display:flex;
 align-items:center;
 ${'' /* margin-right:16px; */}
 left:0;
 font-weight:bold;
 text-decoration:none;

 @media screen and (max-width:960px) {
        transition: 0.8s all ease;
        justify-content:center;
        align-items:center;
        align-text:center;
        padding-top:16px;
        margin-right:34%;  
    }
`


export const MobileIcon = styled.div`
 display:none;

 @media screen and (max-width:780px) {
     display:block;
     position:absolute;
     top:0;
     right:0;
     transform: translate(-100%,60%);
     font-size:1.8rem;
     cursor:pointer;
     color:#35241A;
 }
`

export const NavMenu = styled.ul`
 display:flex;
 align-items:center;
 list-style:none;
 text-align:center;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;

 @media screen and (max-width:760px) {
     display:none;
 }
`

export const NavItem = styled.li`
 height:80px;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
`

//to change the color of the links in the navbar
export const NavLinks = styled(LinkR)`
 color:#35241A;
 display:flex;
 align-items:center;
 text-decoration:none;
 padding:0 24px;
 height:100%;
 cursor:pointer;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 font-size:16px;

 

 &:visited {
    color:blurywood;
}

&:hover {
    color:#00a886;
    border-bottom: 2px solid #00a886;
    
}

&:active {
    border-bottom: 2px solid green;
    color:blue;
}

@media screen and (max-width:960px) {
    padding:0 12px ;
}




`

export const NavBtn = styled.nav`
 display:flex;
 align-items:center;
 height:80px;


 @media screen and (max-width:768px) {
     display:none;
 }
 ${'' /* height:80px;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif; */}
`

export const NavBtnLink = styled(LinkR)`
 color:#00a886;
 display: flex;
 justify-content:flex-end;
 margin-left:16px;
 align-items:center;
 font-style: normal;
 text-align:center;
 font-weight:400;
 font-size: 16px;
 line-height: 1.381;
 padding:12px;
 
 &:hover {
     transition: all 0.2s ease-in-out;
     border-bottom: 2px solid #00a886;
 }
`
export const Img = styled.img`  
    height:78px;
    width:64px;
    object-fit: contain;
    border-radius: 4px;

    @media screen and (max-width:960px) {
     transition: 0.8s all ease;
     height:44px;
 }


`
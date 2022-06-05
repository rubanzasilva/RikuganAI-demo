import styled from 'styled-components';
import {Link} from 'react-router-dom';
//import {NavLink as LinkNav} from 'react-router-dom';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #F7F2EF;
    list-style-type: none;
    `

export const Nav = styled.nav`
 height: 80px;
 margin-top:10px;
 display:flex;
 justify-content:flex-end;
 flex-basis:80%;
 align-items:center;
 position:sticky;
 top:0;
 border:border-box;
 background-color: #001529;
 cursor:pointer;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 border-bottom-style: solid;
 border-bottom-color: #fff;
 padding-top:16px;

 @media screen and (max-width:960px) {
     transition: 0.8s all ease;
 }
`

export const Navlogo = styled.div`
    cursor:pointer;
    font-size:1.2rem;
    display:flex;
    flex-basis:20%;
    justify-content:Center;
    align-items:center;
    border:2px solid #001529;
    height:80px;
    margin-top:10px;
    padding-top:16px;
    font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
    
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
 ${'' /* justify-content:flex-end; */}
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
export const NavLink = styled(Link)`
 color:#fff;
 display:flex;
 align-items:center;
 text-decoration:none;
 padding:0 24px;
 height:100%;
 cursor:pointer;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 font-size:14px;

 &:visited {
    color:blurywood;
}

${'' /* &:hover {
    color:#2c8746;
    border-bottom: 2px solid #2c8746;
    
} */}

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


 @media screen and (max-width:768px) {
     display:none;
 }
`

export const NavBtnLink = styled(Link)`
 color:#2c8746;
 display: flex;
 justify-content:flex-end;
 margin-left:16px;
 align-items:center;
 font-style: normal;
 text-align:center;
 font-weight:400;
 font-size: 14px;
 line-height: 1.381;
 padding:12px;
 
 &:hover {
     transition: all 0.2s ease-in-out;
     border-bottom: 2px solid green;
 }
`
export const Img = styled.img`  
  
    object-fit: cover;
    border-radius: 4px;
`
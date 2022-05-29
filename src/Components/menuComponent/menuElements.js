import styled from "styled-components";
import {Link} from 'react-router-dom';


// export const MenuContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//     background-color: #F7F2EF;
//     padding: 16px;
//     margin: 0;
//     border-radius: 0;
//     box-shadow: 0 0 0 0;
//     border: 0;
//     font-family: "Roboto", sans-serif;
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 1.5;
//     color: #3C3C3C;
//     text-align: center;
//     transition: all 0.3s ease-in-out;
//     cursor: pointer;
//     &:hover {
//         background-color: #F7F2EF;
//         box-shadow: 0 0 0 0;
//         border: 0;
//         color: #3C3C3C;
//     }
// `;

export const NavLink = styled(Link)`
 color:#fff;
 display:flex;
 align-items:center;
 text-decoration:none;
 padding:0;
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

export const ItemContainer = styled.div`
    
`

export const ItemHeading = styled.div`
`

export const ItemName = styled.div`
`

export const UploadData = styled.div`
`

export const ItemTable = styled.div`
`


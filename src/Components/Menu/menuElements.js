import styled from "styled-components";
import {Link} from 'react-router-dom';


export const MenuContainer = styled.div`
    height:100px;
   
    .ant-menu-item a {
    color: #fff;
    
}

.ant-menu-dark.ant-menu-inline, .ant-menu-dark.ant-menu-vertical, .ant-menu-dark.ant-menu-vertical-left, .ant-menu-dark.ant-menu-vertical-right {
    ${'' /* border-right: 0; */}
    height: 100%;
    justify-content: center;
    align-content: center;
    padding-top:16px;
}
`;

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
    color:#fff;
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


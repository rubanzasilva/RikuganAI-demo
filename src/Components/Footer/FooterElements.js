import styled from "styled-components";
import {Link} from 'react-router-dom';


export const FooterContainer = styled.footer`
 background-color:#ffffff;
 ${'' /* background-color:#35241A; */}
 border-box:border-box;
`
export const FooterWrap = styled.div`
 padding:48px 24px;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 max-width:100%;
 margin:0 auto;
`
export const FooterLinksContainer = styled.div`
 display:flex;
 justify-content:center;
 flex-basis:100%;

 @media screen and (max-width:820px) {
     padding-top:32px;
 }
`
export const FooterLinksWrapper = styled.div`
 display:flex;

 @media screen and (max-width:820px) {
     flex-direction:column;
 }
`
export const FooterLinkItems = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 margin:16px;
 text-align:center;
 width:240px;
 box-sizing:border-box;
 ${'' /* color:#35241A; */}
 color:#00a886;
 

 @media screen and (max-width:1000px) {
     width:160px;
 }

 @media screen and (max-width:420px) {
     margin:0;
     padding:24px;
     width:100%;
 }
`
export const FooterLinkTitle = styled.h1`
 margin-bottom:16px;
 ${'' /* color:#F7F2EF; */}
 color:#00a886;
 font-family:"Lato","Roboto","Helvetica Neue",sans-serif;
 font-size:17px;
 font-weight:400;
`
export const FooterLink = styled(Link)`
 ${'' /* color:#F7F2EF; */}
 color:#191a1a;
 text-decoration:none;
 margin-bottom:0.5rem;
 font-size:14px;
 font-family:"Roboto","Helvetica Neue",sans-serif;

 &:hover {
     ${'' /* color:#01bf71; */}
     color:#00a886;
     transition:0.3s ease-out;
 }
`

export const SocialMedia = styled.section`
 max-width:1000px;
 width:100%;
`
export const SocialMediaWrap = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 max-width:1100px;
 margin: 40px auto 0 auto;

 @media screen and (max-width:820px) {
     flex-direction:column;
 }
`
export const SocialLogo = styled(Link)`
 ${'' /* color:#F7F2EF; */}
 color:#35241A;
 justify-self:start;
 cursor:pointer;
 text-decoration:none;
 font-size:1.5rem;
 display:flex;
 align-items:center;
 ${'' /* margin-top:16px; */}
 font-weight:bold;
 `
export const WebsiteRights = styled.small`
 color:#00a886;
 ${'' /* color:#35241A; */}
 ${'' /* margin-bottom:16px; */}
 font-weight:600;

`
export const SocialIcons = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 width:240px;
`
export const SocialIconLink = styled.a`
 ${'' /* color:#F7F2EF; */}
 color:#35241A;
 font-size:24px;
`

export const Img = styled.img`  
    height:60px;
    width:60px;
    object-fit: contain;
    border-radius: 4px;

    @media screen and (max-width:960px) {
    padding:0px 0px 32px ;
}

`

export const LocationOnMap = styled.div`
    display:flex;
    width:100%;
    margin: 40px auto 0 auto;
    justify-content:center;
    align-content:center;

`
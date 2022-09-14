import styled from 'styled-components';
import {Link} from 'react-scroll';
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';


export const HeroContainer = styled.div`
 background:#0c0c0c;
 display:flex;
 justify-content:center;
 align-items:center;
 padding:0 30px;
 height:900px;
 position:relative;
 z-index:1;
 

 :before {
     content:'';
     position:Absolute;
     top:0;
     left:0;
     right:0
     bottom:0;
     background:linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  rgba(0,0,0,0.6) 100%) , 
     linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  transparent 100%);
     z-index:2;

`

export const HeroBg = styled.div`
 position:absolute;
 top:0;
 right:0;
 bottom:0;
 left:0;
 width:100%;
 height:100%;
 overflow:hidden;
`

export const VideoBg = styled.video`
 width:100%;
 height:100%;
 -o-object-fit:cover;
 object-fit:cover;
 background:#232a34;
 opacity:0.4;
`
export const HeroWrapper = styled.div`
${'' /* z-index:3; */}
 ${'' /* max-width:1200px; */}
 position:absolute;
 padding:8px 24px;
 display:flex;
 flex-direction:column;
 align-items:center;
 bottom:200px;
`


export const HeroText = styled.div`
 width:100%
 display:flex;
 text-align:center;
 align-content:center;
 justify-content:center;
 padding-top:0px;
 top:0;
 flex-shrink:1;
 position:relative;
` 


export const HeroH1 = styled.h1`
 font-size:72px;
 color:#fff;
 text-align:center;

 
 @media screen and (max-width:768px) {
     font-size:40px;
 }

 @media screen and (max-width:480px) {
     font-size:32px;
`


export const HeroP = styled.p`
 font-family:"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 margin-top:24px;
 text-align:center;
 height:16px;
 color:#fff;
  
 @media screen and (max-width:768px) {
     font-size:16px;
 }

 @media screen and (max-width:480px) {
     font-size:16px;
 }
`



export const Button = styled(Link)`
 color:#2c8746;
 display: flex;
 justify-content:center;
 align-items:center;
 font-style: normal;
 z-index: 1;
 text-align:center;
 font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 font-weight:400;
 margin-top:.4em;
 font-size: 17px;
 line-height: 1.381;
`

export const ArrowForward = styled(MdArrowForward)` 
 margin-left:8px;
 font-size:20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
 margin-left:8px;
 font-size:20px;
`




//maize content for images section

export const HeroContent = styled.div`
 display:flex; 
 flex-wrap:wrap;
 height:100%;
 width:100%;
 padding:16px;
 margin:auto;
 justify-content:space-around;
 align-items:center;
 margin-bottom:-24px;
 margin-top:24px;
 text-align:center;
 align-content:stretch;
 
 
 
 @media screen and (max-width:720px) {
     flex-direction:column;
     align-items:center;

 }

`





export const HeroCard = styled.div`
 margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 flex-basis:25%;
 padding:28px;
 text-align:center;
 align-content:center;
 justify-content:center;

 @media screen and (max-width:720px) {
     display:grid;
     grid-template-column:1fr;
 }
`

export const HeroIcon = styled.img`
 margin:auto;
 width:50%;
 padding-bottom:36px;
`

export const BtnWrap = styled.div`
    margin:auto;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin-top:64px;

    @media screen and (max-width: 768px) {

        flex-basis:100%;
    }
`
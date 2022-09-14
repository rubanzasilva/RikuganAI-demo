
import React from 'react';
import {HeroContainer,HeroWrapper, HeroBg,VideoBg, HeroH1, HeroP, BtnWrap} from './HeroElement.js';
//import Icon1 from '../../images/maize1.png';
// import Video from '../../Videos/video.mp4'
import {Button ,Typography } from "antd";
import "antd/dist/antd.css";
// import { BtnWrap } from '../Section/SectionElements.js';

const { Title } = Typography;


const HeroCategory = ({title,headline,buttonText,video}) => {

    return (
        <HeroContainer id="heroContainer">
        <HeroBg>
            {/* <VideoBg autoPlay loop muted src={video} type='video/mp4'    /> */}
            <VideoBg autoPlay loop muted src={'https://d322abd807wvow.cloudfront.net/suwik-photos/heroVidB.mp4'} type='video/mp4'    />
        </HeroBg>

        <HeroWrapper>
            <HeroH1> <Title level={1} style={{color:"#ffffff",borderColor:"2px 2px 2px #00a886",fontSize:"48px"}}>{title}</Title></HeroH1>
            <HeroP> <Title level={2} style={{color:"#ffffff"}}>{headline}</Title></HeroP>
            <BtnWrap>
            <Button type="link" size="large" href='/ProductCatalog' style={{color:"#ffffff",borderColor:"#00a886",background:"#000",
                       borderRadius:"6px",minWidth:"100px", marginTop:"32px", borderRadius:"6px" }}>See Our Catalogue</Button>
                        
            {/* <Button type="primary" size="large" style={{background:"#cf1322",
                      borderColor:"red",minWidth:"200px" , borderRadius:"6px" }}>{buttonText}</Button> */}
            </BtnWrap>

        </HeroWrapper>

           {/* <HeroWrapper id="wrapper">

        <HeroContent id="heroContent">
                      <HeroImageCard />
              </HeroContent>

        </HeroWrapper> */}
        </HeroContainer>

    )
}

export default HeroCategory
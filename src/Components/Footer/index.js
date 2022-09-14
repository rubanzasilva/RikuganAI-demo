import React from 'react';
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink,WebsiteRights,Img, LocationOnMap} from './FooterElements';
//import {FaFacebook,FaInstagram,FaWhatsapp,FaTwitter,FaTiktok} from 'react-icons/fa';
import {BackTop, Collapse} from 'antd';
import 'antd/dist/antd.css';
// import logo from '../../Images/suwikLogo.jpeg';


const { Panel } = Collapse;

const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap id='footerWrap'>

            <FooterLinksContainer id='footerLinksContainer'>
                <FooterLinksWrapper>

                 <FooterLinkItems>

                     <FooterLinkTitle>About us</FooterLinkTitle>
   
                     <FooterLink to="/">History</FooterLink>
                     <FooterLink to="/">Testimonials</FooterLink>
                     {/* <FooterLink to="/">SUWIK in the community</FooterLink> */}
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>EDA</FooterLinkTitle>
   
                     <FooterLink to="/ProductCatalog">Exploration</FooterLink>
                     <FooterLink to="/ProductCatalog">Visualization</FooterLink>
                     {/* <FooterLink to="/GreenBeans">Black beans</FooterLink> */}
                     

                 </FooterLinkItems>

                 <FooterLinkItems>

                     <FooterLinkTitle>Data Wrangling</FooterLinkTitle>
   
                     <FooterLink to="/ProductCatalog">Feature Engineering</FooterLink>
                     <FooterLink to="/ProductCatalog">Transformations</FooterLink>
                     {/* <Link> <a href='http://www.zicofecafe.com'>ZICOFE Cafe</a></Link> */}
                     

                 </FooterLinkItems>


                 <FooterLinkItems>

                     <FooterLinkTitle>Build Models</FooterLinkTitle>
   
                     <FooterLink to="/ContactUs">Ensemble</FooterLink>
                     <FooterLink to="/ContactUs">Blog</FooterLink>
                    
                 </FooterLinkItems>
                 

                 

                </FooterLinksWrapper>

            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/"> 
                    <p>RIKUGAN</p> 
                    {/* <Img src={logo} alt='SUWIK INVESTMENTS'/> */}
                    </SocialLogo>
                    <Collapse id="accordionWrapper" accordion expandIconPosition='right' style={{fontSize:"16px" , backgroundColor:"#fff" , marginBottom:"8px"}}>
                        <Panel header="Contact Us" key="1">
                            <p>tech@rikugan.xyz</p>
                        </Panel>
                        </Collapse>
                    {/* <WebsiteRights>wilson@suwik.xyz</WebsiteRights> */}
                    <WebsiteRights>Rikugan AI © {new Date().getFullYear()}
                      All rights reserved.</WebsiteRights>
                    {/* <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/ZigotiCoffee" target="_blank" arial-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/zigoticoffeeofficial/" target="_blank" arial-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/ZicofeOfficial" target="_blank" arial-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.tiktok.com/@zigoticoffee" target="_blank" arial-label="Tiktok">
                            <FaTiktok/>
                        </SocialIconLink>
                        <SocialIconLink href="https://wa.me/message/FTZ2CS3TCD4HC1" target="_blank" aria-label="Whatsapp">
                            <FaWhatsapp/>
                        </SocialIconLink>
                    </SocialIcons> */}
                    
                </SocialMediaWrap>
            </SocialMedia>

        
            

        </FooterWrap>
        <BackTop/>
            
        </FooterContainer>
    )
}

export default Footer
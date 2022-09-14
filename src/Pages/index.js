import React from 'react'
import DataMgt from '../Components/dataMgt/index'
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import NavHome from '../Components/Nav';
import HeroHome from '../Components/homePageHero';
import Footer from '../Components/Footer';

function Home() {
  return (
    <View className="App">
    <NavHome/>
    <HeroHome/>
    
    <div>
    </div>
    <Footer/>
    

    </View>
  );
}


export default Home;
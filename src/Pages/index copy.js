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

function Home({ signOut }) {
  return (
    <View className="App">
    
    <div>
    <p>
      This is the home page

    </p>
    
    <br/>
    <DataMgt/>
    <p>
      This is the home page

    </p>

    
    </div>

      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}


export default withAuthenticator(Home);
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages';
import Visualization from './Pages/visualization';
import DemandForecasting from './Pages/demandForecasting';
import FraudDetection from './Pages/fraudDetection';
import Recommender from './Pages/recommender';
import Admin from './Pages/Admin';
import DataSources from './Pages/dataSources';
import NavBar from './Components/Navbar/indexA';
import UseCases from './Pages/useCases';
import DataManagement from './Pages/dataManagement';

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  View,
} from "@aws-amplify/ui-react";


import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);



function App({ signOut })  {

  return (
  
   <div>
     
     <Router>

     <NavBar/>

       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route index element={<Home />} />
          <Route exact path='/DataSources' element={<DataSources/>}></Route>
          <Route exact path='/Visualization' element={< Visualization />}></Route>
          <Route exact path='/UseCases' element={< UseCases />}></Route>
          <Route exact path='/DataManagment' element={< DataManagement />}></Route>
          <Route exact path='/DemandForecasting' element={<DemandForecasting/>}></Route>
          <Route exact path='/FraudDetection' element={<FraudDetection/>}></Route>
          <Route exact path='/Recommender' element={<Recommender/>}></Route>
          <Route exact path='/Admin' element={<Admin/>  }></Route>  
       </Routes>
     </Router>

     <View className="App">
      <Button onClick={signOut}>Sign Out</Button>
    </View>
    
   </div>
   
  );
}

export default withAuthenticator(App);

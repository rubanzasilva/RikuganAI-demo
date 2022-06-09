import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages';
// import dataSources from './Pages/dataSources';
// import HomeMenu from './Components/Menu/index.tsx';
import Visualization from './Pages/visualization';
import DemandForecasting from './Pages/demandForecasting';
import FraudDetection from './Pages/fraudDetection';
import Recommender from './Pages/recommender';
import Admin from './Pages/Admin';
import DataSources from './Pages/dataSources';
// import Navbar from './Components/Navbar';
import NavBar from './Components/Navbar/indexA'
import UseCases from './Pages/useCases';
import DataManagement from './Pages/dataManagement';
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";



function App({ signOut })  {
  return (
  
   <div>
     
     <Router>
     {/* <Navbar/> */}
     <NavBar/>

     <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>

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
          {/* </Route> */}
       </Routes>
     </Router>
    
   </div>
   
  );
}

export default withAuthenticator(App);

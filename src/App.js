import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages';
import Visualization from './Pages/visualization';
import DemandForecasting from './Pages/demandForecasting';
// import FraudDetection from './Pages/fraudDetection';
// import Recommender from './Pages/recommender';
import Admin from './Pages/Admin';
// import NavBar from './Components/Navbar/indexA';
import UseCases from './Pages/useCases';
import DataManagement from './Pages/dataManagement';
import HomePage from './Pages/homePage';
import DataSets from './Pages/dataSets';




function App()  {

  return (
  
   <div>
     
     <Router>

     {/* <NavBar/> */}

       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route index element={<Home />} />
          <Route path="/homepage" element={<HomePage/>}/>
          <Route exact path='/dataSets' element={<DataSets/>}></Route>
          <Route exact path='/visualization' element={< Visualization />}></Route>
          <Route exact path='/usecases' element={< UseCases />}></Route>
          <Route exact path='/datamanagement' element={< DataManagement />}></Route>
          <Route exact path='/demandforecasting' element={<DemandForecasting/>}></Route>
          {/* <Route exact path='/frauddetection' element={<FraudDetection/>}></Route>
          <Route exact path='/recommender' element={<Recommender/>}></Route> */}
          <Route exact path='/admin' element={<Admin/>  }></Route>  
       </Routes>
     </Router>

  
    
   </div>
   
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages';
import Datasets from './Pages/Datasets';


function App() {
  return (
  
   <div>
     
     <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/Datasets' element={< Datasets />}></Route>
       </Routes>
     </Router>
    
   </div>
   
  );
}

export default App;

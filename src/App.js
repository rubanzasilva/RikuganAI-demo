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
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import './App.css';
import { API } from 'aws-amplify';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }




function App({ signOut })  {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

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

    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>

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

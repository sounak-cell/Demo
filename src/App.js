
import './App.css';
import Counters from './Components/Counters';
 import Axios from './Components/Axios';

import Hooks from './Components/Hooks';
import Folders from './Components/Folders';
// import Data from './Components/Data';
import Header from './Components/Header';
import {
  BrowserRouter ,
 
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Header />
        <main>
          <Routes>
          <Route path='/' element={<Counters/>} exact/>
          <Route path="/Folders" element={<Folders/>}/>
          <Route path="/Axios" element={<Axios/>}/>
          <Route path="/Hooks" element={<Hooks/>}/>
          
          </Routes>
        
        </main>
        
        </BrowserRouter>
    
   
    </div>
  );
}

export default App;


// import VoterDetails from './Pages/VoterDetails/VoterDetails.jsx';
import LogIn from "./Pages/LogIn/LogIn.jsx";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import {Home} from "./Pages/Home/Home";
import Candiform from "./components/Candiform.jsx";

function App() {
  return (
  <div className='App'>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path="/voterdetails" element={<VoterDetails/>}/> */}
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/canform" element={<Candiform/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
  
}

export default App;



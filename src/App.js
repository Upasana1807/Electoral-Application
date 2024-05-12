
// import VoterDetails from './Pages/VoterDetails/VoterDetails.jsx';
import LogIn from "./Pages/LogIn/LogIn.jsx";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import {Home} from "./Pages/Home/Home";
import Candiform from "./components/Candiform.jsx";
import Candash from "./Pages/Candashboard/Candash.jsx";
import Voterdetails from "./Pages/Voterdetails/Voterdetails.jsx";
import Addash from "./Pages/Admindashboard/Addash.jsx";

import { Navbar } from "./components/Navbar/Navbar.jsx";

import Timer from "./Pages/Timer/Timer.jsx";
import Declared from "./Pages/Declared/Declared.jsx";
import Typage from "./Pages/Typage/Typage.jsx";
import Voting from "./Pages/Voting/Voting.jsx";
import Nomdone from "./Pages/Nomdone/Nomdone.jsx";


function App() {
  return (
  <div className='App'>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path="/voterdetails" element={<VoterDetails/>}/> */}
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/canform" element={<Candiform/>}/>
      <Route path="/candash" element={<Candash/>}/>
      <Route path="/voterdetails" element={<Voterdetails/>}/>
      <Route path="/countdown" element={<Timer/>}/>
      <Route path="/admindash" element={<Addash/>}/>
      <Route path="/declaring" element={<Declared/>}/>
      <Route path="/thankyou" element={<Typage/>}/>
      <Route path="/voting" element={<Voting/>}/>
      <Route path="/nomdone" element={<Nomdone/>}/>


    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
  
}

export default App;



// import VoterDetails from './Pages/VoterDetails/VoterDetails.jsx';
import LogIn from "./Pages/LogIn/LogIn.jsx";
import { BrowserRouter,Routes ,Route } from "react-router-dom";


function App() {
  return (
  <div className='App'>
    <BrowserRouter>
    <Routes>
      {/* <Route path="voterdetails" element={<VoterDetails/>}/> */}
      <Route path="login" element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;



import './App.css';
import {Home} from "./Pages/Home/Home";
// import {Navbar} from "../src/components/Navbar/Navbar";
import { BrowserRouter,Routes ,Route } from "react-router-dom";

function App() {
  return (
   <>
   <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='home' element={<Home/>} />
    </Routes>
   </BrowserRouter>
    
   </>
  );
}

export default App;

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar';
import Dashboard from "./Pages/Dashboard/Dashboard"
import {Routes,Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
const App = () => {
  return (
<>
<div className=''>
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>

      </div>
      <Footer/>
</>

   
    
  )
}

export default App


import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import SignIn from './Routes/SignIn/SignIn.js';
import Register from './Routes/Register/Register.js';
import LoggedIn from "./Routes/LoggedIn/LoggedIn.js"
import './App.css';

 
const App = () => {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <h1>Project Manager</h1>
          </nav>
        </header>
        <Routes>
            <Route exact path='/' element={<SignIn/>} setIsLoggedIn={setIsLoggedIn}/>
            <Route path='/register' element={<Register/>} />
            <Route path='/loggedin' element={<LoggedIn/>} />
         </Routes>
      </div>
    </Router>
  
  )
}

export default App;

//need to launch loggedin page. 
// need to launch register page. 

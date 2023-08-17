import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginSingup from './components/LoginSingup';
import Dashboard from './components/Dashboard';


function App() {

  const [auth, setAuth] = useState(0)

  const authHandle = async () => {
    setAuth(!auth)

  }

  console.log(auth)
  return (
    <>
      <Router>
        <Navbar auth={auth} authHandle={authHandle} />
        <Routes>
          <Route path='/LoginSignup' element={<LoginSingup auth={auth} authHandle={authHandle} />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
        {auth ? <Navigate to="/dashboard" /> : <Navigate to="/LoginSignup" />}

      </Router>
    </>
  );
}

export default App;

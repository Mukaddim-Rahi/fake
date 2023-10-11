import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Auth/Login.js';
import Signup from './component/Auth/Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Add more routes for other pages (e.g., dashboard, home) */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

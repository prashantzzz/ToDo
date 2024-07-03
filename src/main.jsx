import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles.css';
import gzlogo from './assets/todo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import Profile from './profile';
import About from './about';

function Navbar() {

  return ( // this is returning JSX
    <>
      <header>
        <h4><img className="logo" src={gzlogo} alt="Logo" />ToDo</h4>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <button>Login</button>
      </header>
    </>
  );
}

function Driver() {
  return(
  <Router>     
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Driver />
  </React.StrictMode>,
);

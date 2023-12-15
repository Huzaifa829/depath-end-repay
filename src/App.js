import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage.js';
import HomePage from './Pages/HomePage.js';

function App() {
  return (
    <Router>
    <Routes>
       <Route path='/' Component={LandingPage} />
       <Route path='/home' Component={HomePage} />
    </Routes>
</Router>
  );
}

export default App;

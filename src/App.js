import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Router.tsx/NavBar";


const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;

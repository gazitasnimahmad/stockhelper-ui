import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Insights from './components/Insights';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';

function App() {
  return (
    <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/insights" Component={Insights} />
          <Route path="/about" Component={About} />
    </Routes>
  );
}

export default App;
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Getemail from './components/getemail';
import Sendmail from './components/sendmail';
import Displaymail from './components/displaymail';
import Header from './components/header';
import Mail from './components/mail'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div class="App">
        <Header />
        {/* <Mail/> */}
      <Routes>  
        <Route path="/" element={<Getemail/>}/>
        <Route path="/sendmail" element={<Sendmail/>}/>
        <Route path="/displaymail/:id" element={<Displaymail/>}/>
      </Routes>
    </div>
      </Router>
  );
}

export default App;


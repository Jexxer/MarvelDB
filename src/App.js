import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import { MD5 } from 'crypto-js';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Search from './Components/Search';

function App() {


  return (
    <div className="App">

      <Header />

      <main>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'aframe';
import React,{useState} from 'react';
import {VRScene2} from './components/scenes.js';


function App() {
  return (
    <div className="App">
      <VRScene2/>
    {/*
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    */}
    </div>
  );
}

export default App;

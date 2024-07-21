import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// import EComMainFile from './components/E-Commerce/EComMainFile';
// import ApiInt from './components/ApiInt/ApiInt';
import { useEffect, useRef, useState } from 'react';
import Practice from './components/practice/practice';
import { store } from './components/Store';
import { Provider } from 'react-redux';
import TicToy from './components/tic-toy/Tic-Toy';

function App() {

  
  return (
    <>
      {/* <EComMainFile/>  */}
      {/* <ApiInt/> */}

   

        <TicToy/>
       {/* <Practice/> */}
    </>
  );
}

export default App;

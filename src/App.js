import './components/Boxigo_Task/boxigo.css'
// import EComMainFile from './components/E-Commerce/EComMainFile';
// import ApiInt from './components/ApiInt/ApiInt';
import { useEffect, useRef, useState } from 'react';
import Practice from './components/practice/practice';
import TicToy from './components/tic-toy/Tic-Toy';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Boxigo_Task/HomePage';
import MovieDetail from './components/Boxigo_Task/MoveDetail';
import Profile from './components/Boxigo_Task/Profile';
import Navbar from './components/Boxigo_Task/Navbar';

function App() {


  return (
    <>
      <BrowserRouter>
        {/* <EComMainFile/>  */}
        {/* <ApiInt/> */}

      <div className='boxigo'>
        <Navbar/>
        <Routes>
          {/* <Route path='/' element={<Boxigo />} /> */}
          <Route path='/' element={<HomePage />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        </div>
        {/* <TicToy/> */}
        {/* <Practice/> */}
      </BrowserRouter>
    </>
  );
}

export default App;

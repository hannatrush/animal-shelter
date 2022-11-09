import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';
import Pets from './pages/Pets';
import Help from './pages/Help/Help';
import Footer from './components/Footer';

import './scss/app.scss';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pets' element={<Pets/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;

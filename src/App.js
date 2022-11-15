import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pets from './pages/Pets';
import Help from './pages/Help/Help';
import Contacts from './pages/Contacts/Contacts';
import Footer from './components/Footer';

import './scss/app.scss';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pets' element={<Pets/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;

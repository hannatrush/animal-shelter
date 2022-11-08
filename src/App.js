import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Pets from './pages/Pets';
import Footer from './components/Footer';

import './scss/app.scss';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/pets' element={<Pets/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;

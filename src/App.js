import React from 'react';

import Header from './components/Header';
import Pets from './pages/Pets';
import Footer from './components/Footer';

import './scss/app.scss';

function App() {
  return (
    <>
    <Header/>
    <Pets/>
    <Footer/>
    </>
  );
}

export default App;

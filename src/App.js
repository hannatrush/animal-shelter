import React from 'react';

import Header from './components/Header';

import Categories from './components/Categories';

import Sort from './components/Sort';

import PetBlock from './components/PetBlock';

import Footer from './components/Footer';

import pets from './scss/assets/pets.json';

import './scss/app.scss';

function App() {
  return (
    <>
    <Header/>
    <div className="pets-container">
        <h2>Our friends <br/>who are looking for a house</h2>
        <div className='sortby-box'>
          <Categories/>
          <Sort/>
        </div>
        <div className="pets-items">
          { pets.map( (obj) => 
          <PetBlock key={obj.id} {...obj}/>
          )}
        </div>
        <div className="counters">
          <button className="one count_page">1</button>
          <button className="one count_page">2</button>
          <button className="one count_page">3</button>
          <p className="empty_space">...</p>
          <button className="double count_page">10</button>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;

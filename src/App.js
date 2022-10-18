import React from 'react';
import './scss/app.scss';
import image from './scss/assets/img/Dog5.png';

function App() {
  return (
    <><div class="header-container">
      <div class="header-inner">
        <div class="header-left">
          <h3 class="logo">Cozy House</h3>
          <p class="logo-text">Shelter for pets in Boston</p>
        </div>
        <ul class="header-right">
          <li><a href="#">About the shelter</a></li>
          <li><a href="#">Our pets</a></li>
          <li><a href="#">To help the shelter</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
    </div><div class="pets-container">
        <h2>Our friends <br/>who are looking for a house</h2>
        <div class="pets-items">
          <div class="pets-item">
            <img class="main_img" src="img/Cat.png" alt=""/>
              <p class="name">Katrine</p>
              <a href="#" class="button">Learn more</a>
          </div>
          <div class="pets-item">
            <img class="main_img" src="img/Dog.png" alt=""/>
              <p class="name">Jennifer</p>
              <a href="#" class="button">Learn more</a>
          </div>
          <div class="pets-item">
            <img class="main_img" src="img/Dog1.png" alt=""/>
              <p class="name">Woody</p>
              <a href="#" class="button">Learn more</a>
          </div>
          <div class="pets-item">
            <img class="main_img" src="img/Dog2.png" alt=""/>
              <p class="name">Sofia</p>
              <a href="#" class="button">Learn more</a>
          </div>
          <div class="pets-item">
            <img class="main_img" src="img/Cat1.png" alt=""/>
              <p class="name">Timmy</p>
              <a href="#" class="button">Learn more</a>
          </div>
          <div class="pets-item">
            <img class="main_img" src="img/Dog3.png" alt=""/>
              <p class="name">Charly</p>
              <a href="#" class="button">Learn more</a>
          </div>
          <div class="pets-item">
            <img class="main_img" src="img/Dog4.png" alt=""/>
              <p class="name">Scarlett</p>
              <a href="#" class="button">Learn more</a>
          </div>
          <div class="pets-item">
            <img class="main_img" src="img/Cat2.png" alt=""/>
              <p class="name">Freddie</p>
              <a href="#" class="button">Learn more</a>
          </div>
        </div>
        <div class="counters">
          <button class="one count_page">1</button>
          <button class="one count_page">2</button>
          <button class="one count_page">3</button>
          <p class="empty_space">...</p>
          <button class="double count_page">10</button>
        </div>
      </div><div class="footer-container">
        <div class="footer-inner">
          <div class="footer-items">
            <div class="footer-item">
              <h3 class="footer-text">For questions <br/>and suggestions</h3>
              <address class="contact">
                <img src="img/envelope.png" class="fa img-mail"/>
                  <div class="contact-text">email@shelter.com</div>
              </address>
              <address class="contact">
                <img src="img/telephone.png" class="fa img-phone"/>
                  <p class="contact-text">+13 674 567 75 54</p>
              </address>
            </div>
            <div class="footer-item">
              <h3 class="footer-text">We are waiting <br/>for your visit</h3>
              <address class="contact">
                <img src="img/pin.png" class="fa img-location"/>
                  <p class="contact-text">Boston, Central Street, 1st <br/>(Entrance from the store)</p>
              </address>
              <address class="contact">
                <img src="img/pin.png" class="fa img-location"/>
                  <p class="contact-text">London, South Park, 18st</p>
              </address>
            </div>
            <img src={image} alt="" class="footer-img"/>
          </div>
        </div>
      </div></>

  );
}

export default App;

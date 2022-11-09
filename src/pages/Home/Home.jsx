import React from 'react';
import { Link } from 'react-router-dom';

import PetBlock from '../../components/PetBlock';
import Donation from '../../components/Donation';

import './Home.scss';

function Home() {
  return (
  <>
    <div className="home-container">
        <div className="home-box">
          <div className="home-info">
            <div className="home-text">
              <h3 className="up-i-h" >Not only people <br/>need a house</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida <br/>est in porttitor  porttitor. Duis sodales elementum ipsum, vehicula <br/>condimentum erat fringilla et.
              </p>
              <Link className='home-header-button' to="/pets">Make a friend</Link>
            </div>
          </div>
          <img className='img-home' src="img/Dog7.png" alt="" />
        </div>
    </div>
    <div className="home-about-box">
      <div className="home-about">
        <img src="img/Pets.png" alt=""/>
            <div className="home-about-items">
              <h3>About the shelter <br/> “Cozy House”</h3>
              <p className="home-about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce <br/>efficitur blandit condimentum. Proin accumsan lorem vel gravida <br/>fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.
              </p>
              <p className="home-about-text">
                Donec consectetur, diam in porta tempus, urna ligula vestibulum <br/>nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis <br/>ultrices pharetra. Morbi tempus at ante sit amet tristique.<br/>Maecenas dignissim justo orci, in laoreet urna dapibus nec.<br/> Praesent quis tortor faucibus, tristique ante vitae, dignissim <br/>lorem. Sed at ligula et sem mattis gravida ac vel erat. 
              </p> 
            </div>
      </div>
    </div>
    <div className="home-pets-box">
        <h3>Our friends <br/>who are looking for a house</h3>
        <div className="home-pets">
            <button className='arrow-button'>
            <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="50px"><path d="M189.3,128.4L89,233.4c-6,5.8-9,13.7-9,22.4c0,8.7,3,16.5,9,22.4l100.3,105.4c11.9,12.5,31.3,12.5,43.2,0  c11.9-12.5,11.9-32.7,0-45.2L184.4,288h217c16.9,0,30.6-14.3,30.6-32c0-17.7-13.7-32-30.6-32h-217l48.2-50.4  c11.9-12.5,11.9-32.7,0-45.2C220.6,115.9,201.3,115.9,189.3,128.4z"/></svg>
              </button>
            <div className="main_items">
                <PetBlock/>
            </div>
            <button className='arrow-button'>
              <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="50px"><path d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z"/></svg>
            </button>
        </div>
        <Link className='button-to-pets' to="/pets">Get to know the rest</Link>
    </div>
        <div className="home-help-box">
            <h3>Than you can help <br/>our shelter</h3>
            <div className="help-items">
                <div className="help-item">
                    <img src="img/cat-food.png" alt="" className="img-help"/>
                    <div className="help-item-text">Pet food</div>
                </div>
                <div className="help-item">
                    <img src="img/ambulance.png" alt="" className="img-help"/>
                    <div className="help-item-text">Transportation</div>
                </div>
                <div className="help-item">
                    <img src="img/ball.png" alt="" className="img-help"/>
                    <div className="help-item-text">Toys</div>
                </div>
                <div className="help-item">
                    <img src="img/bowl.png" alt="" className="img-help"/>
                    <div className="help-item-text">Bowls and cups</div>
                </div>
                <div className="help-item">
                    <img src="img/shampoo.png" alt="" className="img-help"/>
                    <div className="help-item-text">Shampoos</div>
                </div>
                <div className="help-item">
                    <img src="img/pills.png" alt="" className="img-help"/>
                    <div className="help-item-text">Vitamins</div>
                </div>
                <div className="help-item">
                    <img src="img/syringe.png" alt="" className="img-help"/>
                    <div className="help-item-text">Medicines</div>
                </div>
                <div className="help-item">
                    <img src="img/leash.png" alt="" className="img-help"/>
                    <div className="help-item-text">Collars / leashes</div>
                </div>
                <div className="help-item">
                    <img src="img/cathouse.png" alt="" className="img-help"/>
                    <div className="help-item-text">Sleeping area</div>
                </div>
            </div>
        </div>
        <Donation/>
  </>
  )
}

export default Home;
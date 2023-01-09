import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPets } from '../../redux/slices/petSlice';

import PetBlock from '../../components/PetBlock';
import Skeleton from '../../components/PetBlock/skeleton';
import PetModal from '../../components/PetModal/PetModal';
import Donation from '../../components/Donation';
import BasicSlider from '../../components/Slider';
import { petSlider } from '../../components/Slider/settings';

import './Home.scss';

function Home() {
  const dispatch = useDispatch();
  const { pets, status } = useSelector((state) => state.pets);
  const {modalItem} = useSelector( (state) => state.modal);

  const getPetItems = async() => {
    const currentPage = 2;
    const category = '';
    const sortBy = '';
  
    dispatch(fetchPets({category, sortBy, currentPage}))
  }

  React.useEffect(() => {
    getPetItems();
  }, []);

  const petItems = pets.map( (obj) => <PetBlock key={obj.id} {...obj}/>);
  const skeletons = [...new Array(4)].map((_, index ) => <Skeleton key = {index}/>);

  return (
  <>
    <div className="home-container">
        <div className="home-box">
          <div className="home-info">
            <div className="home-text">
              <h2 className="up-i-h" >Not only people <br/>need a house</h2>
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
          { (pets.length !== 0 ) && <BasicSlider settings={petSlider()}>
            {status === 'loading' ? skeletons : petItems }
            </BasicSlider>
          } 
          {
            (modalItem !== null) && <PetModal {...modalItem}/>
          }                
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
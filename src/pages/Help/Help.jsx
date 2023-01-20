import React from 'react';
import { Link } from 'react-router-dom';

import Donation from '../../components/Donation';
import VolunteerForm from '../../components/VolunteerForm';

import './Help.scss';

function Help() {
    const [ openForm, setOpenForm ] = React.useState(false);

    return (
        <>
            <div className='page-top'>
                <h3>How to help the shelter</h3>
            </div>
            <div className="adoption-container">
                <div className="adoption-box">
                    <img className='img-adoption' src="img/catanddog.png" alt="" />
                    <div className="adoption-text">
                        <h3>Adopt a pet</h3>
                        <p className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce <br/>efficitur blandit condimentum. Proin accumsan lorem vel gravida <br/>fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. Donec <br/> consectetur, diam in porta tempus, urna ligula vestibulum <br/>nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis <br/>ultrices pharetra.
                        </p>
                        <Link className='adoption-button' to='/pets' >Make a friend</Link>
                    </div>
                </div>
            </div>
            <div className='temporary-adoption-box'>
                <h3>Become a temporary family<br/>(temporary adoption)</h3>
                <p className='text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ipsa, ipsum itaque, ab tenetur nemo non error nostrum sequi eos, rem blanditiis ducimus eaque rerum. Quia, officiis eius sed sunt illum fuga incidunt cum repudiandae nulla aperiam ab recusandae reiciendis inventore quo praesentium neque, laborum tenetur alias mollitia! Mollitia quam saepe laboriosam sint vero, molestiae nostrum optio perspiciatis quo. Beatae officiis asperiores ducimus nesciunt praesentium quos quis laboriosam accusantium fugiat.
                </p>
                <img src="img/pet-group.png" alt="" />
            </div>
            <div className='volunteer-container'>
                <div className="be-volunteer-box">
                    <h3>Become a volunteer and <br/>help us with</h3>
                    <div className="volunteer-items">
                        <div className="volunteer-item">
                            <img src="img/ambulance.png" alt=""/>
                            <div>Transportation</div>
                        </div>
                        <div className="volunteer-item">
                            <img src="img/bowl.png" alt=""/>
                            <div>Feeding</div>
                        </div>
                        <div className="volunteer-item">
                            <img src="img/ball.png" alt=""/>
                            <div>Playing</div>
                        </div>
                        <div className="volunteer-item">
                            <img src="img/shampoo.png" alt=""/>
                            <div>Washing</div>
                        </div>
                        <div className="volunteer-item">
                            <img src="img/cathouse.png" alt=""/>
                            <div>Cleaning</div>
                        </div>
                    </div>
                    <div className='be-volunteer'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium cumque molestias ipsam, eaque hic doloribus sequi. Eius tempore perspiciatis, non laborum illum sapiente ut. Ullam sunt accusamus voluptatem laborum, laudantium natus iste possimus repellat deleniti in ab doloribus? 
                        </p>
                        <div className="time">
                            <div> Volunteer time:</div>
                            <p> Every day <br/> 9 - 12 AM <br/> 4 - 7 PM </p>
                        </div>
                        <h4>To become a volunteer please</h4>
                        <div className="become-volunteer">
                            <button className='adoption-button' 
                                onClick={(e) => {
                                //e.preventDefault();
                                setOpenForm(true)}}
                                >Fill the form
                            </button>
                            {/* {openForm && <VolunteerForm  setOpenForm={setOpenForm}/>} */}
                            <p className='or'>or</p>
                            <Link className='adoption-button' to="/contacts">Contact us</Link>
                        </div>
                    </div>
                    {openForm && <VolunteerForm  setOpenForm={setOpenForm}/>}
                </div>
            </div>
            <Donation/>
        </>
    )
}

export default Help;
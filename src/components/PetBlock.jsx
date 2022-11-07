import React from 'react';
import PetModal from './PetModal';

function PetBlock({imageUrl, name, age, type}) {
  const [modalActive, setModalActive] = React.useState(false);

    return (
        <div className="pets-item">
          <img className="main_img" src={imageUrl} alt=""/>
          <p className="name">{name}</p>
          <a onClick={(e) =>
           {e.preventDefault();
           setModalActive(true);}} href="#" className="button">Learn more</a>
          {
            modalActive && <PetModal imageUrl={imageUrl} name={name} age={age} type={type} setModalActive={setModalActive}/>
          }
        </div>
    )
}

export default PetBlock;
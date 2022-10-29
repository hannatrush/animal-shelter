import React from 'react';
import PetModal from './PetModal';

function PetBlock({imageUrl, name}) {
  const [modalActive, setModalActive] = React.useState(false);

    return (
        <div className="pets-item">
          <img className="main_img" src={imageUrl} alt=""/>
          <p className="name">{name}</p>
          <a onClick={() => setModalActive(true)} href="#" className="button">Learn more</a>
          {
            modalActive && <PetModal modalActive={modalActive} setModalActive={setModalActive}/>
          }
        </div>
    )
}

export default PetBlock;
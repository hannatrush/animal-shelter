import React from 'react';
import { useDispatch } from 'react-redux';

import { setModalItem } from '../redux/slices/modalSlice';

function PetBlock({imageUrl, name, age, type }) {
  const dispatch = useDispatch();
 
  const onClickModal = (...obj) => {
    dispatch(setModalItem(...obj));
  }

  return (
    <div className="pets-item">
      <img className="main_img" src={imageUrl} alt=""/>
      <p className="name">{name}</p>
      <a href="#" 
        className="button"
        onClick={(e) => {
          e.preventDefault();
          onClickModal({imageUrl, name, age, type})}}
        >Learn more</a>
    </div>
  )    
}

export default PetBlock;
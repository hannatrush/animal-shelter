import React from 'react';

function PetModal({name, imageUrl, age, type, setModalActive}) {
   return(
    <div className='modal-wrapper'>
        <div className="pet-modal">
            <button className="close" onClick={() =>setModalActive(false)}>
            <svg className="x" data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200"><title/><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
            </button>
            <img className="pet" src={imageUrl} alt=""/>
            <div className="modal-text">
                <h3 className="pet-name">{name}</h3>
                <h4 className="type">{type}</h4>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce <br/> efficitur blandit condimentum. Proin accumsan lorem vel gra <br/>vida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc. <br/>Donec consectetur, diam in porta tempus, urna ligula ves <br/>tibulum nibh.
                </div>
                <ul>
                    <li><span className="info">Age: </span><span className="info-text" >{age}</span></li>
                    <li><span className="info">Inoculation: </span><span className="info-text" >none</span></li>
                    <li><span className="info">Diseases: </span><span className="info-text" >none</span></li>
                    <li><span className="info">Parasites: </span><span className="info-text" >none</span></li>
                </ul>
            </div>
        </div>
    </div>
   ) 
}

export default PetModal;
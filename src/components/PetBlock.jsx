function PetBlock({imageUrl, name}) {
    return (
        <div className="pets-item">
          <img className="main_img" src={imageUrl} alt=""/>
          <p className="name">{name}</p>
          <a href="#" className="button">Learn more</a>
        </div>
    )
}

export default PetBlock;
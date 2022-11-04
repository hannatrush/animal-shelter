import React from 'react';

function Categories({activeCategory, onChangeCategory}) {
  const categories = ['All', 'Cats', 'Dogs'];

  const changeCategory = (index) => {
    onChangeCategory(index);
  }

  return (
    <div className="categories">
      <ul className="category">
        {categories.map( (value, index) =>
        <li key={value} onClick={() => changeCategory(index)} className={activeCategory === index ? "active" : ''}>{value}</li>
      )}
      </ul>
    </div>
  )
}

  export default Categories;
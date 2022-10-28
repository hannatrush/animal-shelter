import React from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categories = ['All', 'Cats', 'Dogs'];

  const changeCategory = (index) => {
    setActiveCategory(index);
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
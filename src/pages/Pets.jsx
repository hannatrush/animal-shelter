import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setActiveCategory } from '../redux/slices/filterSlice';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PetBlock from '../components/PetBlock';

function Pets() {
    const [pets, setItems] = React.useState([]);
    const dispatch = useDispatch();
    const activeCategory = useSelector((state) => state.filter.activeCategory );
    const sort = useSelector((state) =>  state.filter.sort);

    const onChangeCategory = (id) => {
        dispatch(setActiveCategory(id));
    }

    React.useEffect( () => {
        axios
        .get(`https://6304d33c761a3bce77f07e90.mockapi.io/pets?${activeCategory > 0 ? `category=${activeCategory}` : ''}${sort > 0 ? `&sex=${sort}` : ''}`)
        .then((res) => {
          setItems(res.data);
        })
      }, [activeCategory, sort])
    
    return (
        <div className="pets-container">
        <h2>Our friends <br/>who are looking for a house</h2>
        <div className='sortby-box'>
          <Categories activeCategory={activeCategory} onChangeCategory={onChangeCategory}/>
          <Sort/>
        </div>
        <div className="pets-items">
          { pets.map( (obj) => 
          <PetBlock key={obj.id} {...obj}/>
          )}
        </div>
        <div className="counters">
          <button className="one count_page">1</button>
          <button className="one count_page">2</button>
          <button className="one count_page">3</button>
          <p className="empty_space">...</p>
          <button className="double count_page">10</button>
        </div>
    </div>
    )
}

export default Pets;
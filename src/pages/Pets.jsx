import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setActiveCategory, setCurrentPage } from '../redux/slices/filterSlice';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PetBlock from '../components/PetBlock';
import Pagination from '../components/Pagination';

function Pets() {
    const [pets, setItems] = React.useState([]);
    const dispatch = useDispatch();
    const {activeCategory, sort, currentPage} = useSelector((state) => state.filter);

    const onChangeCategory = (id) => {
        dispatch(setActiveCategory(id));
    };

    const onChangePage = (number) => {
      dispatch(setCurrentPage(number))
    }

    React.useEffect( () => {
      const params = {
        sex: sort > 0 ? sort : null,
        category: activeCategory > 0 ? activeCategory : null
      };

        axios
        .get(`https://6304d33c761a3bce77f07e90.mockapi.io/pets?page=${currentPage}&limit=8`, {
          params
        })
        .then((res) => {
          setItems(res.data);
        })
        window.scrollTo(0, 0);
      }, [activeCategory, sort, currentPage])
    
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
       <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
    )
}

export default Pets;
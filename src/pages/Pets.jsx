import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { setActiveCategory, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchPets } from '../redux/slices/petSlice';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PetBlock from '../components/PetBlock';
import PetModal from '../components/PetModal/PetModal';
import Pagination from '../components/Pagination';

function Pets() {
    const dispatch = useDispatch();
    const { pets } = useSelector((state) => state.pets);
    const {modalItem} = useSelector( (state) => state.modal);
    const {activeCategory, sort, currentPage} = useSelector((state) => state.filter);

    const onChangeCategory = (id) => {
        dispatch(setActiveCategory(id));
    };

    const onChangePage = (number) => {
      dispatch(setCurrentPage(number));
    }

    const getPets = async () => {
      const category = activeCategory > 0 ? `&category=${activeCategory}` : ''; 
      const sortBy = sort > 0 ? `&sex=${sort}` : ''; 
     
      dispatch(fetchPets({ category, sortBy, currentPage}));
  
      window.scrollTo(0, 0);
    }
    
    React.useEffect( () => { 
      getPets();
    }, [activeCategory, sort, currentPage]);
    
    return (
        <div className="pets-container">
        <h2>Our friends <br/>who are looking for a house</h2>
        <div className='sortby-box'>
          <Categories activeCategory={activeCategory} onChangeCategory={onChangeCategory}/>
          <Sort/>
        </div>
        <div className="pets-items">
          { pets.map( (obj) => <PetBlock key={obj.id} {...obj}/>)}
          {
            (modalItem !== null) && <PetModal {...modalItem}/>
          }
        </div>
       <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
    )
}

export default Pets;
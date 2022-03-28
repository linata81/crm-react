import React, {useState, useEffect, useContext} from 'react';
import { BidsbaseContext } from '../context/bidsbaseContext';
import { buttons } from '../const';

const Header = () => {
  
  const [product, setProduct] = useState('all');
  const {filterStatus, onChangeFilterStatus, onChangeFilterProduct} = useContext(BidsbaseContext);
  
  const elements = buttons.map((elem,i) => {
    return <button
              key={i+elem.name}
              name={elem.name}
              onClick={e => onChangeFilterStatus(e.target.name)}
              className={elem.name !== filterStatus ? "btn btn-light" : "btn btn-light active"}
              type='button'
           >{elem.text}</button>
  });
  
  const handleChange = e => setProduct(e.target.value);
  
  useEffect(() => {
    onChangeFilterProduct(product)
    //eslint-disable-next-line
  }, [product]);

  return (
    <>
      <div className="admin-heading-1">Все заявки</div>
      <form>
        <div className="row mb-3 justify-content-start">
          <div className="col">
            <div className="btn-group" role="group" aria-label="...">
              {elements}
            </div>
          </div>
          <div className="col">
            <select value={product} onChange={handleChange} className="form-select">
              <option value="all">Все продукты</option>
              <option value="kitchen">Кухня</option>
              <option value="salon">Гостиная</option>
              <option value="bedroom">Спальня</option>
              <option value="nursery">Детская</option>
              <option value="closet">Шкаф-купе</option>
            </select>
          </div>
        </div>
      </form>      
    </>
  );
}

export default Header;

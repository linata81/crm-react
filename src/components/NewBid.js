import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { BidsbaseContext } from '../context/bidsbaseContext';
import Bid from './Bid';

const NewBid = () => {
  const {idCounter} = useContext(BidsbaseContext);
  const date = new Date().toLocaleDateString();

  const addNewBid = (event) => {
    event.preventDefault();
  };
  
  return (
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <div className="admin-heading-1">Создать новую заявку</div>
        </div>
        <div className="col text-right">
          <Link to="/" className="btn btn-link">Вернуться назад</Link>
        </div>
      </div>
      <div className="row">
        <div className="col" id="card">
          <form action="">
            <Bid id={idCounter} date={date}/>
            <div className="row justify-content-between">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={addNewBid}
                >Сохранить</button>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
  );
}

export default NewBid;

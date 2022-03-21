import React from 'react';
import Bid from './Bid';
import { Link } from 'react-router-dom';

const EditBid = () => {
  return (
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <div className="admin-heading-1">Работа с заявкой</div>
          </div>
          <div className="col text-right">
            <Link to="/" className="btn btn-link">Вернуться назад</Link>
          </div>
        </div>
        <div className="row">
          <div className="col" id="card">
            <form action="">
              <Bid/>
              <div className="row justify-content-between">
                <div className="col">
                  <Link to="/" type="button" className="btn btn-primary" data-button-save>Сохранить изменения</Link>
                </div>
                <div className="col text-right">
                  <Link to="/" type="button" className="btn btn-dark" data-button-archive>Удалить в архив</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default EditBid;

import React from 'react';

const Header = () => {
  return (
    <>
      <div className="admin-heading-1">Все заявки</div>
      <form action="">
        <div className="row mb-3 justify-content-start">
          <div className="col">
            <div className="btn-group" role="group" aria-label="..." data-filter-status>
              <button className="btn btn-light active">Все</button>
              <button className="btn btn-light">Новые</button>
              <button className="btn btn-light">В работе</button>
              <button className="btn btn-light">Завершенные</button>
              <button className="btn btn-light">Архив</button>
            </div>
          </div>
          <div className="col">
            <select className="form-select" id="inputGroupSelect01" data-filter-product>
              <option value="">Все продукты</option>
              <option value="Кухня">Кухня</option>
              <option value="Гостиная">Гостиная</option>
              <option value="Спальня">Спальня</option>
              <option value="Детская">Детская</option>
              <option value="Шкаф-купе">Шкаф-купе</option>
            </select>
          </div>
        </div>
      </form>      
    </>
  );
}

export default Header;

import React from 'react';

const Bid = ({id, date}) => {
  return (
    <div className="card mb-4">
      <div className="card-header">Данные о заявке</div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-2"><strong>ID:</strong></div>
          <div className="col"> Заявка №{id}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2"><strong>Дата создания:</strong></div>
          <div className="col"> <span>{date}</span></div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2"><strong>Продукт:</strong></div>
          <div className="col">
            <select className="form-select" id="inputGroupSelect01" data-product>
            <option defaultValue>Выберите...</option>
              <option value="Кухня">Кухня</option>
              <option value="Гостиная">Гостиная</option>
              <option value="Спальня">Спальня</option>
              <option value="Детская">Детская</option>
              <option value="Шкаф-купе">Шкаф-купе</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2"><strong>Имя:</strong></div>
          <div className="col">
            <input type="text" className="form-control"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2"><strong>Email:</strong></div>
          <div className="col">
            <input type="text" className="form-control"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2"><strong>Телефон:</strong></div>
          <div className="col">
            <input type="text" className="form-control"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">
            <strong>Статус заявки:</strong>
          </div>
          <div className="col">
            <select className="form-select" id="inputGroupSelect01" data-status>
              <option>Выберите...</option>
              <option value="Новый">Новый</option>
              <option value="В работе">В работе</option>
              <option value="Завершен">Завершен</option>
              {/* <option value="Архивный" hidden>Архивный</option> */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bid;

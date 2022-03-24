import React from 'react';
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
          <div className="col">
            <form>
              <div className="card mb-4">
                <div className="card-header">Данные о заявке</div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-2"><strong>Дата создания:</strong></div>
                    <div className="col"> <span data-datetime>2019-04-23 13:52:13 </span></div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2"><strong>Продукт:</strong></div>
                    <div className="col">
                      <select className="form-select">
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
                      <input type="email" className="form-control"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2"><strong>Телефон:</strong></div>
                    <div className="col">
                      <input type="tel" className="form-control"/>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Статус заявки:</strong>
                    </div>
                    <div className="col">
                      <select className="form-select">
                        <option value="Новый">Новый</option>
                        <option value="В работе">В работе</option>
                        <option value="Завершен">Завершен</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
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

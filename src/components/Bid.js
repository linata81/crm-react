import React from 'react';

const Bid = ({register, errors}) => {
 
  return (
    <div className="card mb-4">
      <div className="card-header">Данные о заявке</div>
      <div className="card-body">
        <div className="row mb-25">
          <div className="col-md-2"><strong>Продукт:</strong></div>
          <div className="col">
            <select {...register("product")} className="form-select">
              <option value="Кухня">Кухня</option>
              <option value="Гостиная">Гостиная</option>
              <option value="Спальня">Спальня</option>
              <option value="Детская">Детская</option>
              <option value="Шкаф-купе">Шкаф-купе</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"><strong>Имя:</strong></div>
          <div className="col">
            <input
              {...register("name", {
              required:"Поле обязательно к заполнению",
              minLength:{
                value:3,
                message: 'Минимум 3 символа'
              }
              })}
              type="text"
              className="form-control"
            />
            <div className='input_error_message'>
              {errors?.name && <p>{errors?.name.message || "Error!"}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"><strong>Email:</strong></div>
          <div className="col">
            <input
              {...register("email", {
              required:"Поле обязательно к заполнению",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: 'Email введен некорректно'
              } 
              })}
              type="email"
              className="form-control"
            />
            <div className='input_error_message'>
                {errors?.email && <p>{errors?.email.message || "Error!"}</p>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"><strong>Телефон:</strong></div>
          <div className="col">
            <input 
              {...register("phone", {
              required:"Поле обязательно к заполнению",
              pattern: {
                value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                message: 'Номер введен некорректно'
              } 
              })}
              type="tel"
              className="form-control"
            />
            <div className='input_error_message'>
                {errors?.phone && <p>{errors?.phone.message || "Error!"}</p>}
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-2">
            <strong>Статус заявки:</strong>
          </div>
          <div className="col">
            <select {...register("status")} className="form-select">
              <option value="Новый">Новый</option>
              <option value="В работе">В работе</option>
              <option value="Завершен">Завершен</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bid;

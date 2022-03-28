import React, {useState ,useEffect, useContext} from 'react';
import { useParams,Navigate } from 'react-router-dom';
import { BidsbaseContext } from '../context/bidsbaseContext';
import PageHeader from './PageHeader';

const EditBid = () => {
  const {id} = useParams();
  const {getBidById, editBid} = useContext(BidsbaseContext);
  const [formIsSent, setFormIsSent] = useState(false);
  const [bid, setBid] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    status: ''
  });

  const handleChange = e => {
    setBid({
      ...bid,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const item = {
      name: bid.name,
      email: bid.email,
      phone: bid.phone,
      product: bid.product,
      status: bid.status,
      date: bid.date     
    };
    editBid(bid.id, item);
    setFormIsSent(prev => !prev);
  }
  
  useEffect(() => {
    const item = getBidById(id);
    setBid(item);
  //eslint-disable-next-line
  },[]);
  
  if(formIsSent){
    return (<Navigate to={'/'}/>)
  }
  return (
      <div className="container-fluid">
        <PageHeader text='Работа с заявкой'/>
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="card mb-4">
                <div className="card-header">Данные о заявке</div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-2"><strong>Дата создания:</strong></div>
                    <div className="col"> <span>{bid.date}</span></div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2"><strong>Продукт:</strong></div>
                    <div className="col">
                      <select value={bid.product} onChange={handleChange} className="form-select" name='product'>
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
                      <input
                        type="text"
                        className="form-control"
                        name='name'
                        value={bid.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2"><strong>Email:</strong></div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={bid.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2"><strong>Телефон:</strong></div>
                    <div className="col">
                      <input
                        type="tel"
                        className="form-control"
                        name='phone'
                        value={bid.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <strong>Статус заявки:</strong>
                    </div>
                    <div className="col">
                      <select value={bid.status} onChange={handleChange} name='status' className="form-select">
                        <option value="Новый">Новый</option>
                        <option value="В работе">В работе</option>
                        <option value="Завершен">Завершен</option>
                        <option value="Архивный">Архивный</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col">
                  <button type="submit" className="btn btn-primary">Сохранить изменения</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default EditBid;

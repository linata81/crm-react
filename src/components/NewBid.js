import React, {useState, useContext} from 'react';
import { Link,Navigate } from 'react-router-dom';
import { BidsbaseContext } from '../context/bidsbaseContext';
import { useForm } from 'react-hook-form';
import Bid from './Bid';

const NewBid = () => {
  const [formIsSent, setFormIsSent] = useState(false);
  const {addBid} = useContext(BidsbaseContext);
  const {register, handleSubmit, formState: {errors}} = useForm();
  
  const onSubmit = (data, event) => {
    event.preventDefault();
    const date = new Date().toLocaleDateString();
    const bid = {
      ...data,
      date
    }
    addBid(bid);
    setFormIsSent(prev => !prev);
  }
  
  if(formIsSent){
    return (<Navigate to={'/'}/>)
  }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Bid register={register} errors={errors}/>
            <div className="row justify-content-between">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-primary"
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

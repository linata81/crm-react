import React, {useState, useContext, useRef} from 'react';
import { Link,Navigate } from 'react-router-dom';
import { BidsbaseContext } from '../context/bidsbaseContext';
import Bid from './Bid';

const NewBid = () => {
  const [formIsSent, setFormIsSent] = useState(false);
  const {addBid} = useContext(BidsbaseContext);
  const formRef = useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    formData.append('date', new Date().toLocaleDateString());
    const bid = Object.fromEntries(formData);
    addBid(bid);
    setFormIsSent(prev => !prev);
  };
  
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
          <form ref={formRef}>
            <Bid/>
            <div className="row justify-content-between">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
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

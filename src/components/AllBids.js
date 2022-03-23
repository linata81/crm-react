import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { BidsbaseContext } from '../context/bidsbaseContext';
import Header from './Header';
import Table from './Table';

const AllBids = () => {
  const {getBids} = useContext(BidsbaseContext);
  
  useEffect(() => {
    getBids();
    //eslint-disable-next-line
  }, [])
  
  return (
    <div className="main-wrapper">
      <div className="container">
        <Header/>
        <Table/>
        <div className="col mt-40">
          <Link to="crm-new-bid" type="button" className="btn btn-primary" data-button-save>Создать заявку</Link>
        </div>
      </div>     
    </div>
  );
}

export default AllBids;

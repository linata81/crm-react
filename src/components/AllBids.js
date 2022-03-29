import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { BidsbaseContext } from '../context/bidsbaseContext';
import Header from './Header';
import Pagination from './Pagination';
import Table from './Table';

const AllBids = () => {
  
  const {getBids, visibleBids} = useContext(BidsbaseContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [bidsPerPage] = useState(10);
  
  useEffect(() => {
    getBids();
    //eslint-disable-next-line
  }, []);
  
  const lastBidIndex = currentPage * bidsPerPage;
  const firstBidIndex = lastBidIndex - bidsPerPage;
  const currentBidsPage = visibleBids.slice(firstBidIndex, lastBidIndex);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="main-wrapper">
      <div className="container">
        <Header/>
        <Table bids={currentBidsPage} currentPage={currentPage} bidsPerPage={bidsPerPage}/>
        <div className="col d-flex justify-content-center mt-30 mb-30">
          <Link to="crm-new-bid" type="button" className="btn btn-primary">Создать заявку</Link>
        </div>
        <Pagination
          bidsPerPage={bidsPerPage}
          totalBids={visibleBids.length}
          currentPage={currentPage}
          paginate={paginate}
          setCurrentPage={setCurrentPage}
        />
      </div>     
    </div>
  );
}

export default AllBids;

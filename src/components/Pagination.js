import React from 'react';

const Pagination = ({bidsPerPage, totalBids, currentPage, paginate, setCurrentPage}) => {
  
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalBids / bidsPerPage); i++) {
    pageNumber.push(i);
  }
  
  const nextPage = () => {
    if(currentPage < pageNumber.length) {
      setCurrentPage(prev => prev + 1);
    }
  }
  
  const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  }
  
  if(pageNumber.length === 1) {
    return null
  }
  
  return (
    <nav aria-label="Page navigation" className='d-flex justify-content-center'>
      <ul className="pagination pagination-sm">
        <li className="page-item">
          <button type='button' className="page-link" aria-label="Previous" onClick={prevPage}>&laquo;</button>
        </li>
        {
          pageNumber.map(number => (
            <li className={currentPage !== number ? "page-item" : "page-item active"} key={number}>
              <button type='button' className="page-link" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))
        }
        <li className="page-item">
          <button type='button' className="page-link" aria-label="Next" onClick={nextPage} >&raquo;</button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
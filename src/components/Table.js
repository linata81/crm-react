import React from 'react';
import TableItem from './TableItem';

const Table = ({bids}) => {

  const elements = bids.map((item,i) => {
    return <TableItem key={item.id} bid={item} num={i+1}/>
  })
  
  return (
    <div className="table__wrap">
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>дата</th>
            <th>продукт</th>
            <th>имя</th>
            <th>email</th>
            <th>телефон</th>
            <th>статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {elements}
        </tbody>
      </table>            
    </div>
  );
}

export default Table;

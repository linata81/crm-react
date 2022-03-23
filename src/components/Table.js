import React, {useContext} from 'react';
import { BidsbaseContext } from '../context/bidsbaseContext';
import TableItem from './TableItem';

const Table = () => {
  const {bids} = useContext(BidsbaseContext);

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

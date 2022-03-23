import React from 'react';
import { Link } from 'react-router-dom';

const TableItem = ({bid, num}) => {
  let classNames = 'badge rounded-pill';
  switch(bid.status) {
    case 'Новый' : 
      classNames += ' bg-danger';
      break;
    case 'В работе':
      classNames += ' bg-warning text-dark';
      break;
    case 'Завершен':
      classNames += ' bg-success';
      break;
    case 'Архивный':
      classNames += ' bg-secondary';
      break;
    default:
      classNames = 'badge rounded-pill';
  }
  
  return (
    <tr>
      <th scope="row">{num}</th>
      <td>{bid.date}</td>
      <td>{bid.product}</td>
      <td>{bid.name}</td>
      <td>{bid.email}</td>
      <td>{bid.phone}</td>
      <td>
        <div className={classNames}>{bid.status}</div>
      </td>
      <td>
        <Link to="crm-edit-bids" className='btn btn-link'>Редактировать</Link>
      </td>                
    </tr>
  );
}

export default TableItem;
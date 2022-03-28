import React from 'react';
import { Link} from 'react-router-dom';

const PageHeader = ({text}) => {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col">
        <div className="admin-heading-1">{text}</div>
      </div>
      <div className="col text-right mt-30">
        <Link to="/" className="btn btn-link">Вернуться назад</Link>
      </div>
    </div>
  );
}

export default PageHeader;

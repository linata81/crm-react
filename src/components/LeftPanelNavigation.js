import React, {useState, useContext, useEffect} from 'react';
import { BidsbaseContext } from '../context/bidsbaseContext';
import { buttons } from '../const';

const LeftPanelNavigation = () => {
  
  const {bids, filterStatus, onChangeFilterStatus} = useContext(BidsbaseContext);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(bids.filter(item => item.status === 'Новый').length)
  }, [bids]);
  
  const elements = buttons.map((elem,i) => {
    if(elem.name === 'new') {
      return (
        <li key={elem.name+i} className='pos-rel'>
          <button
            name={elem.name}
            className={elem.name !== filterStatus ? "" : "active"}
            onClick={e => onChangeFilterStatus(e.target.name)}
            type='button'
          >{elem.text}</button>
          <div className={count === 0 ? "d-none" : "badge pos-abs"}>{count}</div>
        </li>        
      )
    }
    
    return (
      <li key={elem.name+i}>
        <button
          name={elem.name}
          className={elem.name !== filterStatus ? "" : "active"}
          onClick={e => onChangeFilterStatus(e.target.name)}
          type='button'
        >{elem.text}</button>
      </li>
    )
 });
  
  return (
    <>
      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
          {elements}
        </ul>
      </div>
      <div className="left-panel__navigation left-panel__navigation--no-line">
        <ul>
          <li>
            <button>Выход</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftPanelNavigation;

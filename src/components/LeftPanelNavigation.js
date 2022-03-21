import React from 'react';

const LeftPanelNavigation = () => {
  return (
    <>
      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
          <li>
            <button className='active'>Все вместе</button>
          </li>
          <li className='pos-rel'>
            <button>Новые</button>
            <div className="badge pos-abs" data-counter>2</div></li>
          <li>
            <button>В работе</button>
          </li>
          <li>
            <button>Завершенные</button>
          </li>
          <li>
            <button>Архив</button>
          </li>
        </ul>
      </div>
      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Продукты</div>
        <ul>
          <li>
            <button>Активные</button>
          </li>
          <li>
            <button>Архив</button>
          </li>
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

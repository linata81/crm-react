import React from 'react';
import User from './User';
import LeftPanelNavigation from './LeftPanelNavigation';

const LeftPanel = () => {
  return (
    <div className="left-panel blue-skin">
      <div className="left-panel__logo">
        <div className="left-panel__logo-title">CRM заявки</div>
        <div className="left-panel__logo-subtitle">ателье мебели "Колибри"</div>
      </div>
      <User/>
      <LeftPanelNavigation/>
    </div>

  );
}

export default LeftPanel;

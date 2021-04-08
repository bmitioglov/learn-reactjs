import React from 'react';
import Menu from '../Menu/menu';
import SortPanel from '../SortPanel/sortpanel';
import './menupanel.css';

const MenuPanel = ({ menuClick }) => (
  <div className="menu-panel">
    <Menu menuClick={menuClick} />
    <SortPanel />
  </div>
);

export default MenuPanel;

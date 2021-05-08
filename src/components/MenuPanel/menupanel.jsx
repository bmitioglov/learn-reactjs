import React from 'react';
import Menu from '../Menu/menu';
import Sortpanel from '../SortPanel/sortpanel';
import './menupanel.css';

const MenuPanel = () => (
  <div className="menu-panel">
    <Menu />
    <Sortpanel />
  </div>
);

export default MenuPanel;

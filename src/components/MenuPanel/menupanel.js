import React from 'react';
import Menu from '../Menu/menu';
import SortPanel from '../SortPanel/sortpanel';
import './menupanel.css';

const MenuPanel = () => (
  <div className="menu-panel">
    <Menu />
    <SortPanel />
  </div>
);

export default MenuPanel;

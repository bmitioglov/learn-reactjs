import React from 'react';
import Menu from '../Menu/menu';
import SortPanel from '../SortPanel/sortpanel';
import './menupanel.css';

const MenuPanel = () => (
  <div className="MenuPanel">
    <Menu />
    <SortPanel />
  </div>
);

export default MenuPanel;

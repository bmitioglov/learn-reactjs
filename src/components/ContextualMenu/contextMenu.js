import React from 'react';
import './contextmenu.css';

const ContextMenu = ({ options }) => {
  return (
    <div className="context-menu">
      <ul className="menu-options">
        {
          options.map(({ title, callback }) => (
            <li key={title} className="menu-option">
              <button className="context-button" type="button" onClick={callback}>{title}</button>
            </li>))
        }
      </ul>
    </div>
  );
};

export default ContextMenu;

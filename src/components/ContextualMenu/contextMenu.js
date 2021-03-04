import React from 'react';
import './contextualmenu.css';

const ContextMenu = ({ toggleEdit, toggleDelete }) => {
  return (
    <>
      <div className="context-menu">
        <ul className="menu-options">
          <li className="menu-option" onClick={toggleEdit}>Edit</li>
          <li className="menu-option" onClick={toggleDelete}>Delete</li>
        </ul>
      </div>
    </>
  );
};

export default ContextMenu;

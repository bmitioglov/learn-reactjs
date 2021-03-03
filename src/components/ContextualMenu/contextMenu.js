import React from 'react';
import './contextualmenu.css';

const ContextMenu = ({ xPos, yPos, toggleEdit, toggleDelete }) => {
  return (
    <>
      <div style={{ top: yPos, left: xPos }} className="context-menu">
        <ul className="menu-options">
          <li className="menu-option" onClick={toggleEdit}>Edit</li>
          <li className="menu-option" onClick={toggleDelete}>Delete</li>
        </ul>
      </div>
    </>
  );
};

export default ContextMenu;

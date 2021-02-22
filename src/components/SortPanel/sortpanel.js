import React from 'react';
import './sortpanel.css';

const SortPanel = () => (
  <div className="SortPanel">
    <div>Sort By</div>
    <select>
      <option>Name</option>
      <option>Relese Date</option>
    </select>
  </div>
);

export default SortPanel;

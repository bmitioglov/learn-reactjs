import React from 'react';
import './sortpanel.css';

const SortPanel = () => (
  <div className="sort-panel">
    <div>Sort By</div>
    <select>
      <option>Name</option>
      <option>Release Date</option>
    </select>
  </div>
);

export default SortPanel;

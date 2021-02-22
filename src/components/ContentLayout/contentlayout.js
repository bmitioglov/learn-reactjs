import React from 'react';
import './contentlayout.css';

const Content = (props) => (
  <div className="ContentLayout">{props.children}</div>
);

export default Content;

import React from 'react';
import './notfoundpage.css';
import {Link, useHistory} from 'react-router-dom';

const Notfoundpage = () => {
  const history = useHistory();
  
  function handleClick() {
    history.push('/');
  }
  
  return (
    <div className="error-container">
      <div className="error-label">Page not found</div>
      <div className="error-label">404</div>
      {/*<button className="go-back-button" type="button" onClick={handleClick}>Go back to Home</button>*/}
      <Link className="go-back-button" to="/">Home</Link>
    </div>
  );
};

export default Notfoundpage;
